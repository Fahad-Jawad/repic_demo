'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import RadioInput from './RadioGroup';
import CheckboxInput from './CheckBoxGroup';
import { TableInput } from './TableInput';
import CountryInput from './CountryInput';
import TextArea from './TextArea';
import SelectInput from './Select';
import DateInput from './DateInput';
import Boolean from './Boolean';
import FileUpload from './FileUpload';
import GeographyInput from './GeographyInput';
import TextField from './TextField';

const QuestionRenderer = ({ questions }) => {
  const answers = useSelector((state) => state.form.answers); // Get answers from Redux store

  // Function to check if a question should be displayed based on conditions
  const checkConditions = (question) => {
    if (!question.conditions) return true; // If no conditions, show the question

    // return question.conditions.every((condition) => {
    //   const answer = answers.find((a) => a.questionId === condition.questionId);
    //   return answer && answer.value === condition.value; // Check if condition is met
    // });
  };

  return (
    <>
      <div className='flex flex-wrap gap-2'>
        {questions.map((question) => {
          // Check if the question should be displayed based on conditions
          if (!checkConditions(question)) {
            return null; // Skip rendering if the condition is not met
          }

          // Render question based on its type
          switch (question.type) {
            case 'text':
              return (
                <TextField
                  key={question.id}
                  type={'text'}
                  placeholder={'John'}
                  question={question}
                />
              );
              case 'name':
              return (
                <TextField
                  key={question.id}
                  type={'name'}
                  placeholder={'John'}
                  question={question}
                />
              );
            case 'email':
              return (
                <TextField
                  key={question.id}
                  type={'email'}
                  question={question}
                  placeholder={'email@example.com'}
                />
              );
            case 'phone':
              return (
                <TextField
                  key={question.id}
                  type={'tel'}
                  placeholder={'+34 6XX XXX XXX'}
                  question={question}
                />
              );
            case 'textArea':
              return <TextArea key={question.id} question={question} />;
            case 'boolean':
              return <Boolean key={question.id} question={question} />;
            case 'select':
              return <SelectInput key={question.id} question={question} />;
            case 'date':
              return <DateInput key={question.id} question={question} />;
            case 'radio':
              return <RadioInput key={question.id} question={question} />;
            case 'checkbox':
              return <CheckboxInput key={question.id} question={question} />;
            // case 'table':
            //   return <TableInput key={question.id} question={question} />;
            case 'country':
              return <CountryInput key={question.id} question={question} />;
            case 'geography':
              return <GeographyInput key={question.id} question={question} />;
            case 'file':
              return <FileUpload key={question.id} question={question} />;
            default:
              return null; // Default case in case of unrecognized type
          }
        })}
      </div>
    </>
  );
};

export default QuestionRenderer;
