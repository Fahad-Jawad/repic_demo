'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../store/slices/formSlice';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tooltips } from './Tooltips';

const GeographyInput = ({ question }) => {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [states, setStates] = useState([]);
  const dispatch = useDispatch();

  
  const countries = useSelector(
    (state) => state.form.options[question.endpointKey]
  );
  const {country} = useSelector((state) => state.form.answers[question.id]) || '';
  const {region} = useSelector((state) => state.form.answers[question.id]) || '';
  const {state} = useSelector((state) => state.form.answers[question.id]) || '';
  const {city} = useSelector((state) => state.form.answers[question.id]) || '';

  // Handle country change
const handleCountryChange = (value) => {
  const selectedCountry = countries[value];
  if (selectedCountry) {
    setRegions(selectedCountry.regions); // Set regions based on country
    setStates([]); // Reset states
    setCities([]); // Reset cities
    dispatch(
      setAnswer({
        questionId: question.id,
        value: { country: value, region: '', state: '', city: '' }, // Update with selected country
      })
    );
  }
};

// Handle region change
const handleRegionChange = (value) => {
  const selectedRegion = regions.find((region) => region.name === value);
  if (selectedRegion) {
    setStates(selectedRegion.states); // Set states based on region
    setCities([]); // Reset cities
       // Access current value from the Redux store

       const newValue = { 
         country:country, // Get the current value from Redux state
         region: value, 
         state: '', 
         city: '' 
       };
   
       dispatch(
         setAnswer({
           questionId: question.id,
           value: newValue, // Directly pass the updated value
         })
       );

  }
};

// Handle state change
const handleStateChange = (value) => {
  const selectedState = states.find((state) => state.name === value);
  if (selectedState) {
    setCities(selectedState.cities); // Set cities based on state
    
    const newValue = { 
      country:country, // Get the current value from Redux state
      region: region, 
      state: value, 
      city: '' 
    };

    dispatch(
      setAnswer({
        questionId: question.id,
        value: newValue, // Directly pass the updated value
      })
    );

  }
};

// Handle city change
const handleCityChange = (value) => {
   
  const newValue = { 
    country:country, // Get the current value from Redux state
    region: region, 
    state: state, 
    city: value 
  };

  dispatch(
    setAnswer({
      questionId: question.id,
      value: newValue, // Directly pass the updated value
    })
  );
};


  const error = useSelector((state) => state.form.errors?.[question.id] || '');


  return (
    <div className='my-5 w-full'>
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>

      <div className='flex gap-5 w-3/4'>
        {/* Country Dropdown */}
        <Select value={country} onValueChange={(value) => handleCountryChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select Country' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Country</SelectLabel>
              {Object.keys(countries).map((countryName) => (
                <SelectItem key={countryName} value={countryName}>
                  {countryName} {/* Country name as the value */}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Region Dropdown */}
        <Select value={region} disabled={!regions.length} onValueChange={(value) => handleRegionChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select Region' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Region</SelectLabel>
              {regions.length > 0 ? (
                regions.map((region) => (
                  <SelectItem key={region.code} value={region.name}>
                    {region.name} {/* Region name as the value */}
                  </SelectItem>
                ))
              ) : null}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* State Dropdown */}
        <Select value={state} disabled={!states.length} onValueChange={(value) => handleStateChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select State' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select State</SelectLabel>
              {states.length > 0 ? (
                states.map((state) => (
                  <SelectItem key={state.code} value={state.name}>
                    {state.name} {/* State name as the value */}
                  </SelectItem>
                ))
              ) : null}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* City Dropdown */}
        <Select value={city} disabled={!cities.length} onValueChange={(value) => handleCityChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select City' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select City</SelectLabel>
              {cities.length > 0 ? (
                cities.map((city) => (
                  <SelectItem key={city.code} value={city.name}>
                    {city.name} {/* City name as the value */}
                  </SelectItem>
                ))
              ) : null}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {error && (
        <span className='mt-2 text-sm text-red-500'>
          {error}
        </span>
      )}
    </div>
  );
};

export default GeographyInput;
