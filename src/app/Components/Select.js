import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SelectInput({ question }) {
  // Get static or dynamic options
  const options = question.staticOptions
    ? question.staticOptions
    : useSelector((state) => state.form.options?.[question.endpointKey] || []);

  return (
    <div className="my-5 p-4 py-6 flex flex-col gap-3">
    <label className="block text-gray-700 font-bold">{question.title}</label>
    <p className="text-sm text-gray-500">{question.desc}</p>

    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  );
}
