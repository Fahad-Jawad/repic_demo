'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Input } from '@/components/ui/input';
import { Tooltips } from './Tooltips';

export default function TextField({ question, type, placeholder }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers?.[question.id] || '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  const handleChange = (e) => {
    let text = e.target.value;
    if (type === 'name') {
      text = text.replace(/[^a-zA-Z\s]/g, ''); // Remove non-alphabetic characters, allow spaces
    }
    dispatch(setAnswer({ questionId: question.id, value: text }));
  };

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Input
        type={type}
        id={question.id}
        className={`h-12 w-3/4 !text-base border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        required
      />
      {error && (
        <span className='mt-2 text-sm text-red-500'>
          {error}
        </span>
      )}
    </div>
  );
}
