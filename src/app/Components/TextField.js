'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Input } from '@/components/ui/input';
import { Tooltips } from './Tooltips';

const TextField = React.memo(({ question, type, placeholder }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers?.[question.id] || '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');
  const [inputValue, setInputValue] = useState(value); // Local state for input field
  const [timer, setTimer] = useState(null); // To store the timeout ID

  const handleChange = (e) => {
    let text = e.target.value;
    const maxLimit = 100000;

    if (type === 'name') {
      // Allow only alphabetic characters and spaces
      text = text.replace(/[^a-zA-Z\s]/g, '');
    }
    if (type === 'name' || type === 'text') {
      // Limit the input to 50 characters
      if (text.length > 50) {
        text = text.substring(0, 50); // Truncate to 50 characters
      }
    }

    if (type === 'number') {
      // Remove all non-numeric characters
      text = text.replace(/[^0-9]/g, '');
      // If the value is less than 0, set it to 0
      if (parseInt(text, 10) < 0) {
        text = '0';
      }
      if (parseInt(text, 10) > maxLimit) {
        text = text.substring(0, 6); // Truncate to 50 characters
      }
    }
    setInputValue(text); // Update the local state immediately

    // Clear the previous timer to reset debounce
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timer that updates the Redux state after 300ms
    const newTimer = setTimeout(() => {
      dispatch(
        setAnswer({
          questionId: question.id,
          value: type === 'number' ? parseInt(text, 10) : text,
        })
      );
    }, 300);

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
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Input
        type={type}
        id={question.id}
        className={`h-12 w-3/4 !text-base border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg`}
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
      />
      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
});

export default TextField;
