'use client';
import React, { useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';

const RadioGroupQuestion = React.memo(({ question }) => {
  const dispatch = useDispatch();

  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.options?.[question.endpointKey] || []);

  // Get current value for the question
  const value = useSelector((state) => state.answers?.[question.id] || '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  // Use useCallback to memoize the handleChange function
  const handleChange = useCallback(
    (selectedValue) => {
      dispatch(setAnswer({ questionId: question.id, value: selectedValue }));
    },
    [dispatch, question.id]
  );

  return (
    <div className='my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <RadioGroup
        value={value}
        onValueChange={handleChange}
      >
        {options.map((option, index) => (
          <div key={index} className='flex items-center mt-2'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                type='radio'
                name={`radio-${question.id}`}
                className='mr-2'
                value={option.value} // Use `option.value` here
              />
              <Label>{option.label}</Label> {/* Use `option.label` here */}
            </div>
          </div>
        ))}
      </RadioGroup>

      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
});

export default RadioGroupQuestion;
