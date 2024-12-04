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

export const TableInput = ({ question, data }) => (
  <div className='my-5 p-4 py-6 bg-white rounded-xl shadow-md'>
    <label className='block text-gray-700 font-bold'>{question.title}</label>
    <p className='text-sm text-gray-500'>{question.desc}</p>
    <Table>
      <TableHeader>
        <TableRow>
          {question.columns.map((column, index) => (
            <TableHead key={index}>{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {question.columns.map((column, colIndex) => (
              <TableCell key={colIndex}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
