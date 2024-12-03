'use client';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';

export default function CheckBoxGroup({ question }) {
  const dispatch = useDispatch();

  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.options?.[question.endpointKey] || []);

  // Handle checkbox change
  const handleChange = (value, checked) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        value: checked
          ? [...(question.currentValue || []), value] // Add the new value
          : question.currentValue.filter((v) => v !== value), // Remove unchecked value
      })
    );
  };

  return (
    <div className="my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3">
      <label className="block text-gray-700 font-bold">{question.label}</label>
      <p className="text-sm text-gray-500">{question.desc}</p>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mt-2">
          <Checkbox
            checked={question.currentValue?.includes(option.value)} // Set checked state
            onCheckedChange={(checked) => handleChange(option.value, checked)}
            className="mr-2"
          />
          <label htmlFor={`checkbox-${option.value}`} className="text-sm">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}