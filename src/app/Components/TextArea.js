'use client';
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';

const TextArea = React.memo(({ question }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers?.[question.id] || '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');
  const [inputValue, setInputValue] = useState(value); // Local state for input field
  const [timer, setTimer] = useState(null); // To store the timeout ID

  const handleChange = (e) => {
    const text = e.target.value;
    setInputValue(text); // Update the local state immediately

    // Clear the previous timer to reset debounce
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timer that updates the Redux state after 500ms
    const newTimer = setTimeout(() => {
      dispatch(setAnswer({ questionId: question.id, value: text }));
    }, 500);

    setTimer(newTimer);
  };

  useEffect(() => {
    // Clean up the timer on unmount
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div className='my-5 w-[49%] flex flex-col gap-3'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Textarea
        value={inputValue} // Use the local state for the value
        onChange={handleChange}
        className='w-3/4'
      />
      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
});

export default TextArea;
