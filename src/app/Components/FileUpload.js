'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Tooltips } from './Tooltips';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';

export default function FileUpload({ question }) {
  const dispatch=useDispatch()
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(
        setAnswer({
          questionId: question.id,
          value: file,
        })
      );
    }
  };
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>{' '}
      <div className='flex w-3/4 items-center '>
        <Input
          type='file'
          onChange={(e) => handleFileChange(e)}
          id={`formFile ${question.id}`}
          className='h-12 py-3 text-sm'
          data-max-size={10 * 1024 * 1024}
          accept='.pdf, .xls, .doc, .txt, .jpg'
        />{' '}
      </div>
      <small className='text-gray-500 mt-3 ml-1'>
        Allowed types: PDF, XLS, DOC, TXT, JPG. Max size: 10MB.
      </small>
      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
}
