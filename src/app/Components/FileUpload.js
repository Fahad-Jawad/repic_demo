'use client';
import React from 'react';
import { Input } from '@/components/ui/input';

import React from 'react'

export default function FileUpload({ question, onChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeBytes = parseInt(e.target.dataset.maxSize, 10); // Read the max size from data attribute

    if (file) {
      if (file.size <= maxSizeBytes) {
        onChange(question.id, file.name);
      } else {
        alert(`File size exceeds the maximum limit of ${maxSizeBytes / (1024 * 1024)}MB.`);
        e.target.value = ''; // Reset the input
      }
    }
  };
  return (
    <div className='my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3'>
    <label className='block text-gray-700 font-bold'>{question.title}</label>
    <p className='text-sm text-gray-500'>{question.desc}</p>
    <div className='flex w-full lg:w-1/2 items-center '>
      <Input
        type='file'
        onChange={(e) => handleFileChange(e)}
        id='formFile'
        className='!leading-6 text-sm'
        data-max-size={10 * 1024 * 1024}
        accept='.pdf, .xls, .doc, .txt, .jpg'
      />{' '}
        <small className="text-gray-500">
        Allowed types: PDF, XLS, DOC, TXT, JPG. Max size: 10MB.
      </small>
    </div>
  </div>  )
}

