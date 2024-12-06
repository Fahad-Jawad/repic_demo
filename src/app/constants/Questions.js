// export const QUESTIONS = [
//   {
//     id: 'q1',
//     type: 'text',
//     label: 'What is your name?',
//     isRequired: true,
//     conditions: null,
//     endpointKey: null, // No dynamic options
//     staticOptions: null, // No static options
//   },
//   // {
//   //   id: "q2",
//   //   type: "select",
//   //   label: "Choose your favorite fruit",
//   //   isRequired: false,
//   //   conditions: [{ questionId: "q1", value: "John" }],
//   //   endpointKey: null, // No dynamic options
//   //   staticOptions: [
//   //     { label: "Apple", value: "apple" },
//   //     { label: "Banana", value: "banana" },
//   //     { label: "Cherry", value: "cherry" },
//   //   ], // Static options
//   // },
//   // {
//   //   id: "q3",
//   //   type: "boolean",
//   //   label: "Do you agree to the terms?",
//   //   isRequired: true,
//   //   conditions: null,
//   //   endpointKey: null,
//   //   staticOptions: null,
//   // },
//   {
//     id: 'q4',
//     type: 'radio',
//     label: 'Select your gender',
//     isRequired: true,
//     conditions: null,
//     endpointKey: 'genderOptions', // Fetch options from the endpoint
//     staticOptions: null,
//   },
//   {
//     id: 'q5',
//     type: 'checkbox',
//     label: 'Select your hobbies',
//     isRequired: false,
//     conditions: [{ questionId: 'q1', value: 'John' }],
//     endpointKey: null, // No dynamic options
//     staticOptions: [
//       { label: 'Reading', value: 'reading' },
//       { label: 'Traveling', value: 'traveling' },
//       { label: 'Gardening', value: 'gardening' },
//     ], // Static options
//   },
//   // {
//   //   id: "q6",
//   //   type: "table",
//   //   label: "Num of equipment",
//   //   isRequired: true,
//   //   conditions: null,
//   //   endpointKey: null,
//   //   staticOptions: null,
//   //   columns: ["name", "type", "material"],
//   // },
//   // {
//   //   id: "q7",
//   //   type: "country",
//   //   label: "Your country",
//   //   isRequired: true,
//   //   conditions: null,
//   //   endpointKey: "getCountries", // Dynamic options
//   // },
// ];

export const section1Questions = [
  {
    id: 's1.q.2.1',
    type: 'name',
    label: 'Full Name',
    isRequired: true,
    endpointKey: null, // No dynamic options
    staticOptions: null,
    desc:'this is input for full name'
  },
  {
    id: 's1.q.2.2',
    type: 'email',
    label: 'Email 1',
    isRequired: true,
    endpointKey: null,
    staticOptions: null,
  },
  {
    id: 's1.q.2.3',
    type: 'phone',
    label: 'Telephone Number 1',
    isRequired: true,
    endpointKey: null, // No dynamic options
    staticOptions: null,
  },
];

export const section2AQuestions = [
  //   {
  //     id: 's2.q.2.a.1',
  //     type: 'number',
  //     label: 'Load from the system the Record for the ID',
  //     isRequired: true,
  //     saveAttrib: ABOM_Section2.numIdNatural,
  //     endpointKey: "http://myBackEnd/bringObjectForSection2A?id=ABOM_Section2.numIdNatural",
  //     endpointKeyType: "Put",
  // },
  {
    id: 's2.q.2.a.2',
    type: 'date',
    label: 'Do you have a date in your calendar?',
    isRequired: true,
  },
  {
    id: 's2.q.2.a.3',
    type: 'boolean',
    label: 'Do you have a special payment type?',
    isRequired: false,
  },
  {
    id: 's2.q.2.a.4',
    type: 'country',
    label: 'Select the country and city of the Payment?',
    isRequired: false,
    endpointKey: 'http://myBackEnd/getCountriesCitiesObject', // Populate the list of Countries and the cities of each country
  },

];

export const section2BQuestions = [
  {
    id: 's2.q.2.b.1',
    type: 'number',
    label: 'Load from the system the Record for the legal institution',
    isRequired: false,
    endpointKey:
      'http://myBackEnd/bringObjectForSection2B?id=ABOM_Section2.numIdEntity',
    endpointKeyType: 'Put',
    constraint: 'size<6 digits',
  },
  {
    id: 's2.q.2.b.2',
    type: 'date',
    label: 'Do you have a date in the Entity calendar?',
    isRequired: false,
    constraint: '>',
  },
  {
    id: 's2.q.2.b.3',
    type: 'country',
    label: 'Select the country of the Entity Payment?',
    isRequired: true,
    endpointKey: 'http://myBackEnd/getCountriesCitiesObject', // Populate the list of Countries and the cities of each country
  },
  {
    id: 's2.q.2.b.4',
    type: 'country',
    label: 'Select the city (of that country of Entity Payment)?',
    isRequired: true,
    endpointKey: 'http://myBackEnd/getCountriesCitiesObject', // Populate the list of Countries and the cities of each country
  },
  {
    id: 's2.q.2.b.5',
    type: 'select',
    label: 'Select the currency you will use for payment?',
    isRequired: true,
    endpointKey: 'http://myBackEnd/getCurrencies', // Populate the list of Countries and the cities of each country
  },
  {
    id: 's2.q.2.b.6',
    type: 'country',
    label: 'Select the country of your Nationality',
    isRequired: true,
    endpointKey: 'http://myBackEnd/getCountriesCitiesObject', // Populate the list of Countries and the cities of each country
  },
];

export const section3Questions = [
  {
    id: 's3.q.1',
    type: 'text',
    label: 'Type your main address',
    isRequired: true,
    constraint: 'regexAddress',
    endpointKey: null, // No dynamic options
  },
  {
    id: 's3.q.2',
    type: 'checkbox',
    label: 'Color of your House',
    isRequired: true,
    conditions: null,
    endpointKey: null,
    staticOptions: [
      //Notice this option dont come from an Endpoint (but hardcoded)
      { label: 'Red', value: 'R' },
      { label: 'Green', value: 'G' },
      { label: 'Blue', value: 'B' },
    ], // Static options
  },
  {
    id: 's3.q.3',
    type: 'geography',
    label: 'Select your Geography',
    isRequired: true,
    conditions: null,
    staticOptions: null,
    endpointKey: 'http://myBackEnd/getFullGeographyCountryRegionStateCity', // Populate the list of Countries,Regions,States, Cities of each country
  },
  // {
  //   id: 's3.q.4',
  //   type: 'select',
  //   label: 'Select your region',
  //   isRequired: true,
  //   conditions: null,
  //   staticOptions: null,
  //   endpointKey: 'http://myBackEnd/getFullGeographyCountryRegionStateCity', // Populate the list of Countries,Regions,States, Cities of each country
  // },
  // {
  //   id: 's3.q.5',
  //   type: 'select',
  //   label: 'Select your state',
  //   isRequired: true,
  //   conditions: null,
  //   staticOptions: null,
  //   endpointKey: 'http://myBackEnd/getFullGeographyCountryRegionStateCity', // Populate the list of Countries,Regions,States, Cities of each country
  // },
  // {
  //   id: 's3.q.6',
  //   type: 'select',
  //   label: 'Select your city',
  //   isRequired: true,
  //   conditions: null,
  //   staticOptions: null,
  //   endpointKey: 'http://myBackEnd/getFullGeographyCountryRegionStateCity', // Populate the list of Countries,Regions,States, Cities of each country
  // },
  {
    id: 's3.q.7',
    type: 'table',
    label: 'Choose one of the following row in the table',
    isRequired: true,
    conditions: null,
    endpointKey: null,
    staticOptions: null,
    columns: ['name', 'type', 'material', 'material2', 'material3', 'material4'],
    rows:[{id:11,name:'abc',type:'resistancefhsdkfhaskldfhaskfhlaskjfhaskfhklsdjhfasjkfhlskjhfkajshdfkjahsdlkjfashlkfsdfasdfasdfsdfasf',material:'iron',material2:'iron2',material3:'iron3',material4:'iron4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'},{id:14,name:'cde',type:'resistance',material:'metal',material2:'metal2',material3:'metal3',material4:'metal4'}]
  },
];

export const section4Questions =[
  {
    id: 's4.q.1',
    type: 'textArea',// A paragraph
    label: 'Write the description for the Category Alpha',
    isRequired: true,
    constraint: "500 < size < 5000",
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.2',
    type: 'boolean',
    label: 'Are you allowed to provide a File for that Category? ',
    isRequired: true,
    constraint: null,
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.3',
    type: 'file',// A paragraph
    label: 'Upload the file for Category',
    isRequired: true,
    constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
    endpointKey: "http://myBackEnd/saveSection4File?file=1" // POST for the Binary of the File
},
{
    id: 's4.q.4',
    type: 'textArea',// A paragraph
    label: 'Write the description for the Category Beta',
    isRequired: true,
    conditions:[{id:'s4.q.2',value:true}],
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.5',
    type: 'boolean',
    label: 'Are you allowed to provide a File for that Category? ',
    isRequired: true,
    constraint: null,
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.6',
    type: 'file',// A paragraph
    label: 'Upload the file for Category',
    isRequired: true,
    conditions:[{id:'s4.q.5',value:true}],
    constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
    endpointKey: "http://myBackEnd/saveSection4File?file=2" // POST for the Binary of the File
},
{
    id: 's4.q.7',
    type: 'textArea',// A paragraph
    label: 'Write the description for the Category C',
    isRequired: true,
    constraint: "500 < size < 5000",
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.8',
    type: 'boolean',
    label: 'Are you allowed to provide a File for that Category? ',
    isRequired: true,
    constraint: null,
    endpointKey: null, // No dynamic options
},
{
    id: 's4.q.9',
    type: 'file',// A paragraph
    label: 'Upload the file for Category',
    isRequired: true,
    conditions:[{id:'s4.q.8',value:true}],
    constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
    endpointKey: "http://myBackEnd/saveSection4File?file=2" // POST for the Binary of the File
}
]