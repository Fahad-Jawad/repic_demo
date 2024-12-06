import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';

export default function Boolean({ question }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  const handleChange = (selectedValue) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        value: selectedValue,
      })
    );
  };
  return (
    <div className='my-5 w-[49%] flex flex-col gap-3'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>{' '}
      <RadioGroup
        onValueChange={(selectedValue) => handleChange(selectedValue)}
        className='flex gap-5'
      >
        <div className='flex items-center'>
          <RadioGroupItem
            type='radio'
            name={`radio-${question.id}`}
            className='mr-2'
            value={true} // Use `option.value` here
          />
          <Label>Yes</Label> {/* Use `option.label` here */}
        </div>
        <div className='flex items-center'>
          <RadioGroupItem
            type='radio'
            name={`radio-${question.id}`}
            className='mr-2'
            value={false} // Use `option.value` here
          />
          <Label>No</Label> {/* Use `option.label` here */}
        </div>
      </RadioGroup>
      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
}
