import React from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function TextArea({question}) {
  return (
    <div className='my-5 w-[49%] flex flex-col gap-3'>
      <label className='mb-4 block text-gray-700 font-normal'>{question.label} {question.isRequired && <span className="text-red-500 ml-1">*</span>}</label>
      <Textarea className='w-3/4' />
    </div>
  );
}
