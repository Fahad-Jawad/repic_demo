'use client'
import React, { useState } from 'react';
import { section2AQuestions,section2BQuestions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import ActionBoolean from '../ActionBoolean';
export default function Section2() {
  const [sectionQuestions,setSectionQuestions]=useState([])
  const handleSave = () => {
    console.log('save form1');
  };

  const handleYesFun=()=>{
    setSectionQuestions(section2AQuestions)
  }
  const handleNoFun=()=>{
    setSectionQuestions(section2BQuestions)
  }

  return (
    <div className='flex flex-col'>
      <ActionBoolean question={{label:'Are you going to register Property by Natural (YES) or Legal Entity (NO)?'} } shadow={false} handleYes={handleYesFun} handleNo={handleNoFun}  />
      <QuestionRenderer questions={sectionQuestions} />
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
