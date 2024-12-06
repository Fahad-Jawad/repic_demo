'use client';
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { Tooltips } from './Tooltips';


export default function DateInput({ question }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers[question.id]);
  const handleChange = (value) => {
    console.log(value)
    dispatch(setAnswer({ questionId: question.id, value: value }));
  };
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              ' h-12 lg:w-3/4 justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {value ? (
              format(value, 'yyyy/MM/dd')
            ) : (
              <span className='text-sm'>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full p-0' align='start'>
          <Calendar
            mode='single'
            selected={value}
            onSelect={(value) => handleChange(format(value, 'yyyy/MM/dd'))}
            initialFocus
            disabled={question.constraint === '>' ? { before: new Date() } :'' } // Disable conditionally
            className='w-full'
          />
        </PopoverContent>
      </Popover>

      {error && (
        <span className='mt-2 text-sm text-red-500'>
          {error}
        </span>
      )}
    </div>
  );
}
