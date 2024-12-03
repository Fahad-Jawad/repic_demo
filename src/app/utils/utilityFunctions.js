export function validateQuestions(questions, answers) {
  const errors = {}; // Store errors as an object with questionId as the key

  // Regex patterns for email and phone
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 international phone format

  // Iterate through each question to validate
  questions.forEach((question) => {
    const { id, type, isRequired, title } = question;
    const answer = answers[id]; // Get the answer for this question

    // Check if the field is required and missing
    if (isRequired && (!answer || answer.trim() === '')) {
      errors[id] = `${title} is required.`;
      return;
    }

    // Validate email type
    if (type === 'email' && answer && !emailRegex.test(answer)) {
      errors[id] = `Invalid email format in "${title}".`;
    }

    // Validate phone type
    if (type === 'phone' && answer && !phoneRegex.test(answer)) {
      errors[id] = `Invalid phone number format in "${title}".`;
    }
  });

  return errors;
}

export const constraints = {
  maxSize: 50, // e.g., for size < 50
  maxSizeDigits: 6, // e.g., for size < 6 digits
  dateGreaterThanToday: 'date>today', // e.g., for dates greater than today
  textSizeRange: {
    maxSize: 5000,
    minSize: 500,
  }, // e.g., for text size between 500 and 5000
  fileUploadConstraints: {
    allowedExtensions: ['pdf', 'xls', 'doc', 'txt', 'jpg'], // Allowed file extensions
    maxFileSize: '10m', // Maximum file size limit
  },
};
