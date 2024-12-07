'use client';
import React, { useState, useCallback } from 'react';
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
  const dispatch = useDispatch();

  // Get dynamic country data
  const countries = useSelector((state) => state.form.options[question.endpointKey]);
  
  // Extract current selections from Redux state
  const { country = '', region = '', state = '', city = '' } = useSelector(
    (state) => state.form.answers[question.id] || {}
  );

  const [regions, setRegions] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Handle country change
  const handleCountryChange = useCallback((value) => {
    const selectedCountry = countries[value];
    if (selectedCountry) {
      setRegions(selectedCountry.regions || []); // Set regions based on country
      setStates([]); // Reset states
      setCities([]); // Reset cities
      dispatch(setAnswer({ questionId: question.id, value: { country: value, region: '', state: '', city: '' } }));
    }
  }, [countries, dispatch, question.id]);

  // Handle region change
  const handleRegionChange = useCallback((value) => {
    const selectedRegion = regions.find((region) => region.name === value);
    if (selectedRegion) {
      setStates(selectedRegion.states || []); // Set states based on region
      setCities([]); // Reset cities
      dispatch(setAnswer({
        questionId: question.id,
        value: { country, region: value, state: '', city: '' }
      }));
    }
  }, [regions, country, dispatch, question.id]);

  // Handle state change
  const handleStateChange = useCallback((value) => {
    const selectedState = states.find((state) => state.name === value);
    if (selectedState) {
      setCities(selectedState.cities || []); // Set cities based on state
      dispatch(setAnswer({
        questionId: question.id,
        value: { country, region, state: value, city: '' }
      }));
    }
  }, [states, country, region, dispatch, question.id]);

  // Handle city change
  const handleCityChange = useCallback((value) => {
    dispatch(setAnswer({
      questionId: question.id,
      value: { country, region, state, city: value }
    }));
  }, [country, region, state, dispatch, question.id]);

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
        <Select value={country} onValueChange={handleCountryChange}>
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
        <Select value={region} disabled={!regions.length} onValueChange={handleRegionChange}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select Region' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Region</SelectLabel>
              {regions.map((region) => (
                <SelectItem key={region.name} value={region.name}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* State Dropdown */}
        <Select value={state} disabled={!states.length} onValueChange={handleStateChange}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select State' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select State</SelectLabel>
              {states.map((state) => (
                <SelectItem key={state.name} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* City Dropdown */}
        <Select value={city} disabled={!cities.length} onValueChange={handleCityChange}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select City' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select City</SelectLabel>
              {cities.map((city) => (
                <SelectItem key={city.name} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {error && <span className='mt-2 text-sm text-red-500'>{error}</span>}
    </div>
  );
};

export default GeographyInput;
