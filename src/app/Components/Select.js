import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSelector } from 'react-redux';

export default function SelectInput({ question }) {
  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.form.options?.[question.endpointKey] || []);

  return (
    <div className="my-5 w-[49%] flex flex-col">
      <label className="mb-4 block text-gray-700 font-normal">
        {question.label} {question.isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Select className="" key={question.id}>
        <SelectTrigger className="!h-12 w-3/4">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={option.value || index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
