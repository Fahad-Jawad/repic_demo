'use client';
import React, { useCallback } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';

export default function CheckBoxGroup({ question }) {
  const dispatch = useDispatch();
  const checkedValue = useSelector((state) => state.form.answers[question.id]) || [];
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.options?.[question.endpointKey] || []);

  // Handle checkbox change using useCallback to memoize function
  const handleChange = useCallback((value, checked) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        value: checked
          ? [...checkedValue, value] // Add the new value
          : checkedValue.filter((v) => v !== value), // Remove unchecked value
      })
    );
  }, [checkedValue, dispatch, question.id]);

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      {options.map((option, index) => (
        <div key={index} className='flex items-center mb-1'>
          <Checkbox
            checked={checkedValue.includes(option.value)} // Set checked state
            onCheckedChange={(checked) => handleChange(option.value, checked)}
            className='mr-2'
          />
          <label htmlFor={`checkbox-${option.value}`} className='text-sm'>
            {option.label}
          </label>
        </div>
      ))}
      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
}
