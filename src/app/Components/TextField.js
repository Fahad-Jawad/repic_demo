'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Input } from '@/components/ui/input';

export default function TextField({ question, type, placeholder }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers?.[question.id] || '');

  const handleChange = (e) => {
    console.log(e.target.value);
    let text=e.target.value
    if (type == 'name') {
      text = text.replace(/[^a-zA-Z\s]/g, ''); // Remove non-alphabetic characters, allow spaces
    }
    console.log('t',text)
    dispatch(setAnswer({ questionId: question.id, value: text }));
  };

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 block text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
      </label>
      <Input
        type={type}
        id={question.id}
        className='h-12 w-3/4 !text-base border border-gray-300 rounded-lg'
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
}
