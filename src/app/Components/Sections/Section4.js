import React from 'react';
import { section4Questions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
export default function Section4() {
  const handleSave = () => {
    console.log('save form3');
  };
  return (
    <div className='flex flex-col gap-10'>
      <QuestionRenderer questions={section4Questions} />
      <div className='w-full flex justify-end'>
      <button
        className='bg-blue-500 text-white p-3 px-4 text-base font-semibold w-max rounded-xl'
        onClick={() => handleSave()}
      >
        Save / Next
      </button>
      </div>
    </div>
  );
}
