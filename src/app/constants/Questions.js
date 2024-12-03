export const QUESTIONS = [
  {
    id: "q1",
    type: "text",
    label: "What is your name?",
    isRequired: true,
    conditions: null,
    endpointKey: null, // No dynamic options
    staticOptions: null, // No static options
  },
  // {
  //   id: "q2",
  //   type: "select",
  //   label: "Choose your favorite fruit",
  //   isRequired: false,
  //   conditions: [{ questionId: "q1", value: "John" }],
  //   endpointKey: null, // No dynamic options
  //   staticOptions: [
  //     { label: "Apple", value: "apple" },
  //     { label: "Banana", value: "banana" },
  //     { label: "Cherry", value: "cherry" },
  //   ], // Static options
  // },
  // {
  //   id: "q3",
  //   type: "boolean",
  //   label: "Do you agree to the terms?",
  //   isRequired: true,
  //   conditions: null,
  //   endpointKey: null,
  //   staticOptions: null,
  // },
  {
    id: "q4",
    type: "radio",
    label: "Select your gender",
    isRequired: true,
    conditions: null,
    endpointKey: "genderOptions", // Fetch options from the endpoint
    staticOptions: null,
  },
  {
    id: "q5",
    type: "checkbox",
    label: "Select your hobbies",
    isRequired: false,
    conditions: [{ questionId: "q1", value: "John" }],
    endpointKey: null, // No dynamic options
    staticOptions: [
      { label: "Reading", value: "reading" },
      { label: "Traveling", value: "traveling" },
      { label: "Gardening", value: "gardening" },
    ], // Static options
  },
  // {
  //   id: "q6",
  //   type: "table",
  //   label: "Num of equipment",
  //   isRequired: true,
  //   conditions: null,
  //   endpointKey: null,
  //   staticOptions: null,
  //   columns: ["name", "type", "material"],
  // },
  // {
  //   id: "q7",
  //   type: "country",
  //   label: "Your country",
  //   isRequired: true,
  //   conditions: null,
  //   endpointKey: "getCountries", // Dynamic options
  // },
];
