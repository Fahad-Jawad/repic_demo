import React from 'react';
import { section4Questions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import { useDispatch } from 'react-redux';
import { saveSection4 } from '@/app/store/slices/formSlice';
export default function Section4() {
  const dispatch=useDispatch()
  const handleSave = () => {
    dispatch(saveSection4())

  };
  return (
    <div className='flex flex-col gap-10'>
      <QuestionRenderer questions={section4Questions} />
      <div className='w-full flex justify-end'>
        <button
          className='p-3 px-4 text-base font-semibold w-max rounded-xl 
 bg-blue-500 text-white 
 disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed'
          onClick={() => handleSave()}
        >
          Save / Next
        </button>
      </div>
    </div>
  );
}
