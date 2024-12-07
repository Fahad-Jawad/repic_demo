'use client';
import React, { useState } from 'react';
import {
  section2AQuestions,
  section2BQuestions,
} from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import ActionBoolean from '../ActionBoolean';
import { useSelector, useDispatch } from 'react-redux';
import { saveSection2, setAnswer } from '@/app/store/slices/formSlice';
import PaginatedQuestions from '../PaginatedQuestions';

export default function Section2() {
  const dispatch = useDispatch();

  const [sectionQuestions, setSectionQuestions] = useState([]);
  const handleSave = () => {
    dispatch(saveSection2());
  };
  const value = useSelector((state) => {
    const answer = state.form.answers?.['s2.q.1'];
    return answer === undefined ? null : answer;
  });

  const handleYesFun = () => {
    dispatch(setAnswer({ questionId: 's2.q.1', value: true }));
    setSectionQuestions(section2AQuestions);
  };
  const handleNoFun = () => {
    dispatch(setAnswer({ questionId: 's2.q.1', value: false }));
    setSectionQuestions(section2BQuestions);
  };

  return (
    <div className='flex flex-col'>
      <ActionBoolean
        question={{
          label:
            'Are you going to register Property by Natural (YES) or Legal Entity (NO)?',
        }}
        shadow={false}
        handleYes={handleYesFun}
        handleNo={handleNoFun}
      />
      <PaginatedQuestions questions={sectionQuestions} onSave={handleSave} />
 
    </div>
  );
}
