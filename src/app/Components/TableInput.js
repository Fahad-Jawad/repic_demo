'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@/components/ui/table';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tooltips } from './Tooltips';

export default function TableInput({ question }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.answers?.[question.id] || '');
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  const handleChange = (value) => {
    dispatch(setAnswer({ questionId: question.id, value: value }));
  };
  return (
    <div className='my-5 w-full'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <Table className='border p-2 rounded-xl border-gray-100'>
        <TableHeader>
          <TableRow>
            <TableHead key={question.id}></TableHead>
            {question.columns.map((column, index) => (
              <TableHead key={index} className='text-center capitalize'>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {question.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                <RadioGroup
                  value={value}
                  onValueChange={(selectedValue) => handleChange(selectedValue)}
                >
                  <RadioGroupItem
                    type='radio'
                    name={`radio-${question.id}`}
                    className='mr-2'
                    value={row.id}
                  />
                </RadioGroup>
              </TableCell>
              {question.columns.map((column, colIndex) => (
                <TableCell key={`${colIndex}-${question.id}`}>
                  {row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {error && (
        <span className='mt-2 text-sm text-red-500'>
          {error}
        </span>
      )}
    </div>
  );
}
