'use client';
import React from 'react';
import { Input } from '@/components/ui/input';

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
    <div className='my-5 w-[49%] flex flex-col'>
    <label className='mb-4 block text-gray-700 font-normal'>{question.label} {question.isRequired && <span className="text-red-500 ml-1">*</span>}</label>
    <div className='flex w-3/4 items-center '>
      <Input
        type='file'
        onChange={(e) => handleFileChange(e)}
        id='formFile'
        className='h-12 py-3 text-sm'
        data-max-size={10 * 1024 * 1024}
        accept='.pdf, .xls, .doc, .txt, .jpg'
      />{' '}

    </div>
    <small className="text-gray-500 mt-3 ml-1">
        Allowed types: PDF, XLS, DOC, TXT, JPG. Max size: 10MB.
      </small>
  </div>  )
}

