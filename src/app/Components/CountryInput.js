// // CountryInput.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAnswer } from './redux/actions';

// const CountryInput = ({ question }) => {
//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.options[question.endpointKey]); // Fetch dynamic options

//   const handleCountryChange = (e) => {
//     dispatch(setAnswer({ questionId: question.id, value: { country: e.target.value, city: '' }, type: 'country' }));
//   };

//   const handleCityChange = (e) => {
//     dispatch(setAnswer({ questionId: question.id, value: { ...state.value, city: e.target.value }, type: 'country' }));
//   };

//   return (
//     <div>
//       <label>{question.label}</label>
//       <select onChange={handleCountryChange}>
//         {countries &&
//           countries.map((country) => (
//             <option key={country.code} value={country.code}>
//               {country.name}
//             </option>
//           ))}
//       </select>
//       <select onChange={handleCityChange}>
//         {/* Assuming cities are dynamically loaded based on selected country */}
//       </select>
//     </div>
//   );
// };

// export default CountryInput;
