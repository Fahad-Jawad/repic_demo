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
} from "@/components/ui/select";
import { Tooltips } from './Tooltips';

const CountryInput = ({ question }) => {
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.form.options[question.endpointKey]);

  const { city, country } = useSelector((state) => state.form.answers[question.id]) || {};
  const error = useSelector((state) => state.form.errors?.[question.id] || '');

  // Handle country change and reset city
  const handleCountryChange = useCallback((countryName) => {
    const selectedCountry = countries[countryName];
    const firstCity = selectedCountry?.cities?.[0]?.name || '';
    setCities(selectedCountry?.cities || []);
    
    dispatch(setAnswer({
      questionId: question.id,
      value: { country: countryName, city: firstCity },
    }));
  }, [dispatch, countries, question.id]);

  // Handle city change
  const handleCityChange = useCallback((cityName) => {
    dispatch(setAnswer({
      questionId: question.id,
      value: { country, city: cityName }, // Update city while preserving selected country
    }));
  }, [dispatch, country, question.id]);

  return (
    <div className="my-5 w-[49%]">
      <label className='mb-4 flex items-center text-gray-700 font-normal'>
        {question.label}
        {question.isRequired && <span className='text-red-500 ml-1'>*</span>}
        {question.desc && <Tooltips desc={question.desc} />}
      </label>

      <div className="flex gap-5 w-3/4">
        {/* Country Select */}
        <Select value={country} onValueChange={handleCountryChange}>
          <SelectTrigger className="h-12 w-1/2">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Country</SelectLabel>
              {countries && Object.keys(countries).map((countryName) => (
                <SelectItem key={countries[countryName].code} value={countryName}>
                  {countryName}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* City Select */}
        <Select value={city} onValueChange={handleCityChange} disabled={!cities.length}>
          <SelectTrigger className="h-12 w-1/2">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select City</SelectLabel>
              {cities.map((city) => (
                <SelectItem key={city.code} value={city.name}>
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

export default CountryInput;
