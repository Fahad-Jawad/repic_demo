import React from 'react';
import { section3Questions } from '@/app/constants/Questions';
import QuestionRenderer from '../QuestionRenderer';
import { useDispatch } from 'react-redux';
import { saveSection3 } from '@/app/store/slices/formSlice';
import PaginatedQuestions from '../PaginatedQuestions';
export default function Section3() {

  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(saveSection3());
  };
  return (
    <>
    <PaginatedQuestions questions={section3Questions}onSave={handleSave}/>
    </>
  
  );
}
