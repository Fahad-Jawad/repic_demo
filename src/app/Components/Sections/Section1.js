import React from 'react';
import { section1Questions } from '@/app/constants/Questions';
import { saveSection1 } from '@/app/store/slices/formSlice';
import { useDispatch } from 'react-redux';
import PaginatedQuestions from '../PaginatedQuestions';

export default function Section1() {
  const dispatch = useDispatch();

 
  const handleSave = () => {
    dispatch(saveSection1());
  };

  return (
    <>
    <PaginatedQuestions questions={section1Questions} onSave={handleSave} />
    </>
  );
}
