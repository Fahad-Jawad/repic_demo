import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
};
import { validateQuestions } from '@/app/utils/utilityFunctions';
// Define an object to map URLs to their corresponding functions
const apiEndpoints = {
  'http://myBackEnd/generateUniqueTransactionID': generateTransactionID,
  'http://myBackEnd/getFullGeographyCountryRegionStateCity': getGeographyData,
  'http://myBackEnd/getCurrencies': getCurrenciesData,
  'http://myBackEnd/getCountriesCitiesObject': getCountriesCitiesData,
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

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setAnswer(state, action) {
      const existingAnswerIndex = state.answers.findIndex(
        (ans) => ans.questionId === action.payload.questionId
      );
      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        console.log('sts', action.payload);
        state.answers.push(action.payload);
      }
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
        state.error = null;
      })
      .addCase(fetchOptionsData.fulfilled, (state, action) => {
        state.loading = false;
        state.options = action.payload; // Store the fetched data
      })
      .addCase(fetchOptionsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setAnswer, clearAnswer, clearAllAnswers } = formSlice.actions;
export default formSlice.reducer;
