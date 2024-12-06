import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';

export default function SelectInput({ question }) {

  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers[question.id] ?? '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.form.options?.[question.endpointKey] || []);


    const handleChange = (value) => {
      dispatch(setAnswer({ questionId: question.id, value: value }));
    };
    

  return (
    <div className="my-5 w-[49%] flex flex-col">
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Select value={value} onValueChange={handleChange}  key={question.id}>
        <SelectTrigger className="!h-12 w-3/4">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={option.value || index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
         <span className='mt-2 text-sm text-red-500'>
           {error}
         </span>
       )}
    </div>
  );
}
