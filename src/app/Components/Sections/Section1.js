import React from 'react';
import { section1Questions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import { saveSection1 } from '@/app/store/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Section1() {
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(saveSection1());
  };
  const errors = useSelector((state) => state.form.errors);
  const ans = useSelector((state) => state.form.answers);

  console.log('err', errors);
  console.log('anss', ans);

  return (
    <div className='flex flex-col gap-10'>
      <QuestionRenderer questions={section1Questions} />
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
