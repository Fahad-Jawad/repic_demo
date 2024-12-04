'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';

export default function RadioGroupQuestion({ question }) {
  const dispatch = useDispatch();

  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.options?.[question.endpointKey] || []);

  // Get current value for the question
  const value = useSelector((state) => state.answers?.[question.id] || '');

  // Handle radio button change
  const handleChange = (selectedValue) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        value: selectedValue,
      })
    );
  };

  return (
    <div className="my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3">
      <label className="mb-4 block text-gray-700 font-bold">{question.label} {question.isRequired && <span className="text-red-500 ml-1">*</span>}</label>

      <RadioGroup value={value} onValueChange={(selectedValue) => handleChange(selectedValue)}>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                type="radio"
                name={`radio-${question.id}`}
                className="mr-2"
                value={option.value} // Use `option.value` here
              />
              <Label>{option.label}</Label> {/* Use `option.label` here */}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
