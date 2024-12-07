import React from 'react';
import { section4Questions } from '@/app/constants/Questions';
import { useDispatch } from 'react-redux';
import { saveSection4 } from '@/app/store/slices/formSlice';
import PaginatedQuestions from '../PaginatedQuestions';

export default function Section4() {
  const dispatch=useDispatch()
  const handleSave = () => {
    dispatch(saveSection4())

  };
  return (
    <>
    <PaginatedQuestions questions={section4Questions} onSave={handleSave}/>
    </>
  );
}
