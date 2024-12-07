import {
  createSlice,
  createAsyncThunk,
  rejectWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  section1Questions,
  section2AQuestions,
  section2BQuestions,
  section3Questions,
  section4Questions,
} from '@/app/constants/Questions';
import {
  generateTransactionID,
  getCountriesCitiesData,
  getCurrenciesData,
  getGeographyData,
} from '@/app/constants/mockApis';
const initialState = {
  options: {}, // This will hold the fetched data
  loading: false,
  error: null,
  transactionId: null,
  answers: {},
  errors: {},
};
import {
  validateQuestions,
  getCodes,
  getCountryAndCityCode,
} from '@/app/utils/utilityFunctions';
// Define an object to map URLs to their corresponding functions
const apiEndpoints = {
  'http://myBackEnd/getFullGeographyCountryRegionStateCity': getGeographyData,
  'http://myBackEnd/getCurrencies': getCurrenciesData,
  'http://myBackEnd/getCountriesCitiesObject': getCountriesCitiesData,
};

const extractAnswersForSection = (state, sectionQuestions) => {
  const { answers, options } = state; // Assuming `answers` is in the Redux state
  console.log(answers);

  return sectionQuestions.reduce((result, q) => {
    let value;
    if (q.type === 'country') {
      const { country, city } = answers[q.id] || {};
      value =
        country && city
          ? getCountryAndCityCode(country, city, options[q.endpointKey])
          : null;
    } else if (q.type === 'geography') {
      const { country, region, state, city } = answers[q.id] || {};
      value =
        country && region && state && city
          ? getCodes(country, region, state, city, options[q.endpointKey])
          : null;
    } else {
      value = answers[q.id] !== undefined ? answers[q.id] : null;
    }

    // Add the result to the output object with the question id as the key
    result[q.id] = value;
    return result;
  }, {}); // Start with an empty object
};

const nullifyAnswersForSection = (sectionQuestions) => {
  return sectionQuestions.reduce((acc, q) => {
    acc[q.id] = null;
    return acc;
  }, {});
};

const checkConditionsAndUpdateAnswers = (questions) => {
  return (dispatch, getState) => {
    const { answers } = getState(); // Get current answers from Redux state

    // Loop through questions and check conditions
    questions.forEach((question) => {
      if (!question.conditions) return; // Skip if no conditions

      // Check if the conditions are met
      const conditionsMet = question.conditions.every((condition) => {
        const answer = answers[condition.id];
        return answer && answer === condition.value; // Check if condition is met
      });

      // If conditions are not met, set the value to null
      if (!conditionsMet) {
        answers[question.id] = null; // Set answer to null if condition is not met
      }
    });

    // Dispatch the action to update answers in Redux state
    dispatch(setAnswer({ ...answers }));
  };
};

// Async thunk to fetch data concurrently
export const fetchOptionsData = createAsyncThunk(
  'options/fetchData',
  async (_, thunkAPI) => {
    try {
      const results = await Promise.all(
        Object.keys(apiEndpoints).map((url) =>
          apiEndpoints[url]().then((data) => ({ url, data }))
        )
      );

      // Convert results into a key-value object
      const storedData = results.reduce((acc, { url, data }) => {
        acc[url] = data;
        return acc;
      }, {});

      return storedData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch data concurrently
export const getTransactionId = createAsyncThunk(
  'fetch Id',
  async (_, thunkAPI) => {
    try {
      const id = await generateTransactionID();
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPreviousValues = createAsyncThunk(
  'answers/getPreviousValues',
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.example.com/get-previous-values',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      return data; // Return the fetched data to store in state.answers
    } catch (error) {
      return rejectWithValue(error.message); // Handle errors gracefully
    }
  }
);

export const saveSection1 = createAsyncThunk(
  'sections/saveSection1',
  async (_, { getState, rejectWithValue }) => {
    const { form } = getState();

    const transactionId = form.transactionId; // Assuming `transactionId` is in the Redux state
    const answers = extractAnswersForSection(form, section1Questions); // Extract answers with potential nulls

    // Validate answers before proceeding
    const errors = validateQuestions(section1Questions, answers);

    if (Object.keys(errors).length > 0) {
      return rejectWithValue({ errors });
    }

    const payload = {
      transactionId,
      answers,
    };

    console.log('section 1 payload', payload);

    // Uncomment and use the actual API call when ready
    // const response = await axios.post('http://myBackEnd/saveSection1', payload);
    return payload;
  }
);

export const saveSection2 = createAsyncThunk(
  'sections/saveSection2',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { form } = getState();
      const { answers, transactionId } = form;

      // Extract the value for id: 's2.q.1'
      const section2Decision = answers['s2.q.1'];
      const questions = section2Decision
        ? section2AQuestions
        : section2BQuestions;

      console.log('comb', questions, answers);

      const errors = validateQuestions(questions, answers);
      console.log('error', errors);

      if (Object.keys(errors).length > 0) {
        return rejectWithValue({ errors });
      }

      // Prepare section answers
      const section2AAnswers =
        section2Decision === false
          ? nullifyAnswersForSection(section2AQuestions)
          : extractAnswersForSection(form, section2AQuestions);

      const section2BAnswers =
        section2Decision === true
          ? nullifyAnswersForSection(section2BQuestions)
          : extractAnswersForSection(form, section2BQuestions);

      // Flatten answers into a single object
      const combinedAnswers = {
        's2.q.1': section2Decision, // Add the decision question
        ...section2AAnswers,
        ...section2BAnswers,
      };

      const payload = {
        transactionId,
        answers: combinedAnswers,
      };

      console.log('pay', payload);

      // const response = await axios.post('http://myBackEnd/saveSection2', payload);
      // return response.data;
      return payload;
    } catch (e) {
      console.log('ee', e);
    }
  }
);

// Thunk for saving Section 3
export const saveSection3 = createAsyncThunk(
  'sections/saveSection3',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { form } = getState();
      const transactionId = form.transactionId;
      const answers = extractAnswersForSection(form, section3Questions);
      const payload = {
        transactionId,
        answers,
      };

      console.log('pay', payload);
      const errors = validateQuestions(section3Questions, answers);

      if (Object.keys(errors).length > 0) {
        console.error('Validation errors:', errors);
        return rejectWithValue({ errors });
      }

      const response = await axios.post(
        'http://myBackEnd/saveSection3',
        payload
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

// Thunk for saving Section 4
export const saveSection4 = createAsyncThunk(
  'sections/saveSection4',
  async (_, { getState, rejectWithValue }) => {
    const { form } = getState();
    const transactionId = form.transactionId;
    const answers = extractAnswersForSection(form, section4Questions);
    const payload = {
      transactionId,
      answers,
    };
    const errors = validateQuestions(section4Questions, answers);

    if (Object.keys(errors).length > 0) {
      console.error('Validation errors:', errors);
      return rejectWithValue({ errors });
    }
    checkConditionsAndUpdateAnswers(section4Questions, form);
    console.log('fo', form.answers);
    const response = await axios.post('http://myBackEnd/saveSection4', payload);
    return response.data;
  }
);



const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setAnswer(state, action) {
      const { questionId, value } = action.payload;
      console.log(value);
      // Directly update or add the answer with the key as questionId
      state.answers[questionId] = value;
    },
    clearAnswer(state, action) {
      state.answers = state.answers.filter(
        (answer) => answer.questionId !== action.payload
      );
    },
    clearAllAnswers(state) {
      state.answers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOptionsData.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchOptionsData.fulfilled, (state, action) => {
        state.loading = false;
        state.options = action.payload; // Store the fetched data
      })
      .addCase(fetchOptionsData.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      });
          // get previous answers and populating them 

    builder
      .addCase(getPreviousValues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPreviousValues.fulfilled, (state, action) => {
        state.loading = false;
        state.answers = action.payload; // Store data into answers
      })
      .addCase(getPreviousValues.rejected, (state, action) => {
        state.loading = false;
      }),
      builder
        .addCase(getTransactionId.pending, (state) => {
          state.loading = true;
          state.errors = null;
        })
        .addCase(getTransactionId.fulfilled, (state, action) => {
          state.loading = false;
          state.transactionId = action.payload.transactionID; // Store the fetched data
        });
            // saveSection1

    builder
      .addCase(saveSection1.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(saveSection1.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveSection1.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      });

    // saveSection2
    builder
      .addCase(saveSection2.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(saveSection2.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveSection2.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.errors = action.payload.errors;
      });

    // saveSection3
    builder
      .addCase(saveSection3.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(saveSection3.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveSection3.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      });

    // saveSection4
    builder
      .addCase(saveSection4.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(saveSection4.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveSection4.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      });
  },
});

export const { setAnswer, clearAnswer, clearAllAnswers } = formSlice.actions;
export default formSlice.reducer;
