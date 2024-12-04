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
  // const value = useSelector((state) => state.answers[question.id]);
const value=null
  const handleChange = (value) => {
    console.log(value)
    // dispatch(setAnswer({ questionId: question.id, value: value }));
  };

  return (
    <div className='my-5 w-[49%] flex flex-col'>
      <label className='mb-4 block text-gray-700 font-normal'>{question.label} {question.isRequired && <span className="text-red-500 ml-1">*</span>}</label>

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
              format(value, 'YYYY/MM/DD')
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
            disabled={{ before: new Date() }}
            className='w-full'
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
