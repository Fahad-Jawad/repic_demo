import React from 'react';
import { section3Questions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import { useDispatch,useSelector } from 'react-redux';
import { saveSection3 } from '@/app/store/slices/formSlice';
export default function Section3() {
  const errors = useSelector((state) => state.form.errors);
  const ans = useSelector((state) => state.form.answers);

  console.log('err', errors);
  console.log('anss', ans);
  console.log('qss', section3Questions);

  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(saveSection3());
  };
  return (
    <div className='flex flex-col gap-10'>
      <QuestionRenderer questions={section3Questions} />
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
