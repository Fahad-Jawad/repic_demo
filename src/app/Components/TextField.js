'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Input } from '@/components/ui/input';

export default function TextField({ question }) {
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.answers?.[question.id] || '');

  const ans=useSelector((state) => state.answers)
  console.log(ans)
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(setAnswer({ questionId: question.id, value: e.target.value }));
  };

  return (
    <div className='my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3'>
      <label className='block text-gray-700 font-bold'>{question.title}</label>
      <p className='text-sm text-gray-500'>{question.desc}</p>
      <Input
        type='text'
        id='first_name'
        className='mt-2  w-full lg:w-1/2 p-2 border border-gray-300 rounded-lg'
        onChange={handleChange}
        placeholder='John'
        value={value}
        required
      />
    </div>
  );
}
