export function validateQuestions(questions, answers) {
  const errors = {}; // Store errors as an object with questionId as the key

  // Regex patterns for email and phone
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  const phoneRegex = /^\+?[1-9]\d{0,2}\d{4,12}$/;

  // Iterate through each question to validate
  questions.forEach((question) => {
    const { id, type, isRequired } = question;
    const answer = answers[id]; // Get the answer for this question
    if (isRequired) {
      if (
        !answer || // Check for undefined or null
        (typeof answer === 'string' && answer.trim() === '') || // Check for empty string
        (Array.isArray(answer) && answer.length === 0) || // Check for empty array
        (!Array.isArray(answer) &&
          ['country', 'geography'].includes(question.type) &&
          Object.values(answer).some((value) => value === '')) || // Check for empty object values for specific types
        (typeof answer === 'boolean' && answer === false) // Check if boolean answer is false

      ) {
        errors[id] = `This question is required.`;
        return;
      }
    }

    // Validate email type
    if (type === 'email' && answer && !emailRegex.test(answer)) {
      errors[id] = `Invalid email format.`;
    }

    // Validate phone type
    if (type === 'phone' && answer && !phoneRegex.test(answer)) {
      errors[id] = `Invalid phone number format.`;
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

export function getCodes(countryName, regionName, stateName, cityName, data) {
  const country = data[countryName];
  if (!country) {
    return `Country "${countryName}" not found.`;
  }

  const region = country.regions.find((r) => r.name === regionName);
  if (!region) {
    return `Region "${regionName}" not found in "${countryName}".`;
  }

  const state = region.states.find((s) => s.name === stateName);
  if (!state) {
    return `State "${stateName}" not found in region "${regionName}".`;
  }

  const city = state.cities.find((c) => c.name === cityName);
  if (!city) {
    return `City "${cityName}" not found in state "${stateName}".`;
  }
  return {
    country: country.id,
    region: region.id,
    state: state.id,
    city: city.id,
  };
}

export function getCountryAndCityCode(countryName, cityName, data) {
  const country = data[countryName];
  if (!country) {
    return `Country "${countryName}" not found.`;
  }

  const city = country.cities.find((c) => c.name === cityName);
  if (!city) {
    return `City "${cityName}" not found in "${countryName}".`;
  }

  return {
    country: country.id,
    city: city.id,
  };
}
