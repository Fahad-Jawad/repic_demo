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
import { useDispatch } from 'react-redux';

export default function DateInput({ question }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.answers[question.id]);

  const handleChange = (value) => {
    dispatch(setAnswer({ questionId: question.id, value: value }));
  };

  return (
    <div className='my-5 p-4 py-6 bg-white rounded-xl shadow-md flex flex-col gap-3'>
      <label className='block text-gray-700 font-bold'>{question.title}</label>
      <p className='text-sm text-gray-500'>{question.desc}</p>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              ' w-full lg:w-1/2 justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {value ? (
              format(value, 'YYYY/MM/DD')
            ) : (
              <span className='text-sm'>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={value}
            onSelect={(value) => handleChange(value)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
