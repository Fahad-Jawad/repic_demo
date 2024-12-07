import React, { useState } from 'react';
import QuestionRenderer from './QuestionRenderer'; // Your existing QuestionRenderer

function PaginatedQuestions({ questions, onSave, questionsPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Get the questions for the current page
  const currentQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    Math.min(currentPage * questionsPerPage, questions.length)
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Render the current page's questions */}
      <QuestionRenderer questions={currentQuestions} />


      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {/* Previous Button */}
          <button
            className="p-2 px-3 bg-gray-200 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`p-2 px-4 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="p-2 px-3 bg-gray-200 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
       {/* Save/Next Button */}
       <div className="w-full flex justify-end">
        <button
          className="p-3 px-4 text-base font-semibold w-max rounded-xl 
          bg-blue-500 text-white 
          disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed"
          onClick={onSave}
        >
          Save / Next
        </button>
      </div>
    </div>
  );
}


export default PaginatedQuestions;
