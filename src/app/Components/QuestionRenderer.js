'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import TextInput from './TextField';
import RadioInput from './RadioGroup';
import CheckboxInput from './CheckBoxGroup';
import TableInput from './TableInput';
import CountryInput from './CountryInput';
import TextArea from './TextArea';
import SelectInput from './Select';

const QuestionRenderer = ({ questions }) => {
  const answers = useSelector((state) => state.form.answers); // Get answers from Redux store

  // Function to check if a question should be displayed based on conditions
  const checkConditions = (question) => {
    if (!question.conditions) return true; // If no conditions, show the question

    return question.conditions.every((condition) => {
      const answer = answers.find((a) => a.questionId === condition.questionId);
      return answer && answer.value === condition.value; // Check if condition is met
    });
  };
  const handleSubmit = () => {
    // Call your endpoint here
  };

  return (
    <>
      <div>
        {questions.map((question) => {
          // Check if the question should be displayed based on conditions
          if (!checkConditions(question)) {
            return null; // Skip rendering if the condition is not met
          }

          // Render question based on its type
          switch (question.type) {
            case 'text':
              return <TextInput key={question.id} question={question} />;
            case 'textarea':
              return <TextArea key={question.id} question={question} />;
            case 'select':
              return <SelectInput key={question.id} question={question} />;
            case 'radio':
              return <RadioInput key={question.id} question={question} />;
            case 'checkbox':
              return <CheckboxInput key={question.id} question={question} />;
            case 'table':
              return <TableInput key={question.id} question={question} />;
            case 'country':
              return <CountryInput key={question.id} question={question} />;
            default:
              return null; // Default case in case of unrecognized type
          }
        })}
      </div>
      <button
        className='mt-4 p-3 bg-blue-500 text-white rounded-lg'
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </>
  );
};

export default QuestionRenderer;
