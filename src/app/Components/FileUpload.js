'use client';
import React, { useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Tooltips } from './Tooltips';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = ['.pdf', '.xls', '.doc', '.txt', '.jpg'];

export default function FileUpload({ question }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  // File validation function
  const validateFile = useCallback((file) => {
    // Check file type
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_FILE_TYPES.includes(`.${fileExtension}`)) {
      return 'Invalid file type. Allowed types: PDF, XLS, DOC, TXT, JPG.';
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds the 10MB limit.`;
    }

    return null; // File is valid
  }, []);

  // Handle file change
  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file) {
        const validationError = validateFile(file);
        if (validationError) {
          // Handle invalid file
          dispatch(
            setAnswer({
              questionId: question.id,
              value: null, // Clear file value on validation error
            })
          );
          return; // Exit if the file is invalid
        }

        //Code here to handle the file save or upload
      }
    },
    [dispatch, validateFile, question.id]
  );

  return (
    <div className="my-5 w-[49%] flex flex-col">
      <label className="mb-4 flex items-center text-gray-700 font-normal">
        {question.label}
        {question.isRequired && <span className="text-red-500 ml-1">*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>
      <div className="flex w-3/4 items-center">
        <Input
          type="file"
          onChange={handleFileChange}
          id={`formFile ${question.id}`}
          className="h-12 py-3 text-sm"
          data-max-size={MAX_FILE_SIZE}
          accept={ALLOWED_FILE_TYPES.join(',')}
        />
      </div>
      <small className="text-gray-500 mt-3 ml-1">
        Allowed types: PDF, XLS, DOC, TXT, JPG. Max size: 10MB.
      </small>
      {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
    </div>
  );
}
