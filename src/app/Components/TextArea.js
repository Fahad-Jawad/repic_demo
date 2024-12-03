import React from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function TextArea({question}) {
  return (
    <div className='my-5 p-4 py-6 flex flex-col gap-3'>
      <label className='block text-gray-700 font-bold'>{question.title}</label>
      <p className='text-sm text-gray-500'>{question.desc}</p>

      <Textarea />
    </div>
  );
}
