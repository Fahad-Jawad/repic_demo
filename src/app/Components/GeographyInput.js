// CountryInput.js
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

const GeographyInput = ({ question }) => {
  const [cities, setCities] = useState(null);
  const [regions, setRegions] = useState(null);
  const [states, setStates] = useState(null);
  const dispatch = useDispatch();
  const { countries } = useSelector(
    (state) => state.form.options[question.endpointKey]
  );

  const handleCountryChange = (value) => {
    setRegions(value.regions);
  };
  const handleRegionChange = (value) => {
    setStates(value.states);
  };
  const handleStateChange = (value) => {
    setCities(value.cities);
  };

  const handleCityChange = (value) => {
    console.log('city', value);

    // dispatch(setAnswer({ questionId: question.id, value: value.code, type: 'geography' }));
  };

  return (
    <div className='my-5 w-full'>
      <label className='mb-4 block text-gray-700 font-normal'>
        {question.label}{' '}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
      </label>

      <div className='flex gap-5 w-3/4'>
        <Select onValueChange={(value) => handleCountryChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select Country' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Country</SelectLabel>
              {countries &&
                countries.map((country) => (
                  <SelectItem key={country.code} value={country}>
                    {country.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleRegionChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select Region' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Region</SelectLabel>
              {regions &&
                regions.map((region) => (
                  <SelectItem key={region.code} value={region}>
                    {region.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleStateChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select State' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select State</SelectLabel>
              {states &&
                states.map((state) => (
                  <SelectItem key={state.code} value={state}>
                    {state.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleCityChange(value)}>
          <SelectTrigger className='h-12 w-1/2'>
            <SelectValue placeholder='Select City' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select City</SelectLabel>
              {cities &&
                cities.map((city) => (
                  <SelectItem key={city.code} value={city}>
                    {city.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default GeographyInput;
