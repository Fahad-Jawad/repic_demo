
// export const questionsMenu1Sections = [
//     //Object to Store the form values by section (since Saving is incremental)
//     ABOM_Section1 {
//         boolAgreement:boolean,
//         strFullname:string,
//         strEmail1:string,
//         strPhone1:string
//     },
    
//     ABOM_Section2 {
//         boolRegisterNatural:boolean,
//         numIdNatural:number,
//         datMyDate1:date,
//         boolPayment1:boolean,
//         numCountry1:number,
//         numCity1:number,
//         numIdEntity:number,
//         numCountry2:number,
//         numCity2:number,
//         numCountry3:number,
//         numCurrencyPay1:number
//     },
    
//     ABOM_Section3 {
//         charColor:char,
//         strAdress:string,
//         numCountry:number,
//         numRegion:number,
//         numState:number,
//         numCity:number,
//         strRow:string
//     },
    
//     ABOM_Section4 {
//         strTextFile1:string,
//         boolAllowFile1:boolean,
//         strFilenamePath1:string,
//         byteFile1:byte[],
//         strTextFile2:string,
//         boolAllowFile2:boolean,
//         strFilenamePath2:string,
//         byteFile2:byte[],
//         strTextFile3:string,
//         boolAllowFile3:boolean,
//         strFilenamePath3:string,
//         byteFile3:byte[],
//     },


//     // payload
//     {
//         transectionId:,
//         answers:[]
//     }

//     //Section1 : Questions for this section inside of the FormA
//     Section1 [
//         {
//             id: 's1.q.0.1', //Section 1 Question 0.1
//             type: 'boolean',//The saved value
//             labelArea: 'Long Lorem ipsum paragraph that can include http links',
//             labelQ: 'Do you accept the software will store all the intelectual property Info? ',
//             isRequired: true,
//             saveAttrib: ABOM_Section1.boolAgreement,
//             constraint: null,
//             actions:{
//                 if (NO) { printPopup("bye")},
//                 else (YES)  { callEndpoint("http://myBackEnd/generateUniqueTransactionID");
//                 }
//             },
//             staticOptions: null, // No static options
//         },
//         {
//             id: 's1.q.2.1',
//             type: 'string',
//             label: 'Full Name',
//             isRequired: true,
//             saveAttrib: ABOM_Section1.strFullname,
//             endpointLabel: null,
//             constraint: "size<50",
//             endpointKey: null, // No dynamic options
//             staticOptions: null
//         },
//         {
//             id: 's1.q.2.2',
//             type: 'string',
//             label: 'Email 1',
//             isRequired: true,
//             saveAttrib: ABOM_Section1.strEmail1,
//             endpointLabel: null,
//             constraint: regexEmail(),
//             endpointKey: null, // No dynamic options
//             staticOptions: null
//         },
//         {
//             id: 's1.q.2.3',
//             type: 'string',
//             label: 'Telephone Number 1',
//             isRequired: true,
//             saveAttrib: ABOM_Section1.strPhone1,
//             endpointLabel: null,
//             constraint: regexPhone(),
//             endpointKey: null, // No dynamic options
//             staticOptions: null
//         },
//         SaveCheckPoint{
//             endpointSave: "http://myBackEnd/saveSection1?object=ABOM_Section1", // For dynamic options
//         }
//     ]


//     Section2 [
//         {
//             id: 's2.q.1', //Section 1 Question 0.1
//             type: 'boolean',//The saved value
//             labelQ: 'Are you going to register Property by Natural (YES) or Legal Entity (NO)? ',//I would like to have a toggle button here
//             isRequired: true,
//             saveAttrib: ABOM_Section2.boolRegisterNatural,
//             constraint: null,
//             actions:{
//                 if (YES) { enable("Section2_A")},
//                 else (NO)  { enable("Section2_B");
//                 }
//             },
//             staticOptions: null, // No static options
//         }
//     ]
    
//     Section2_A[
//         {
//             id: 's2.q.2.a.1',
//             type: 'number',
//             label: 'Load from the system the Record for the ID',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numIdNatural,
//             endpointKey: "http://myBackEnd/bringObjectForSection2A?id=ABOM_Section2.numIdNatural",
//             endpointKeyType: "Put",
//             constraint:"size<6 digits",
//         },
//         {
//             id: 's2.q.2.a.2',
//             type: 'date',
//             label: 'Do you have a date in your calendar?',
//             isRequired: false,
//             saveAttrib: ABOM_Section2.datMyDate1,
//             conditions: "date>today",
//         },
//         {
//             id: 's2.q.2.a.3',
//             type: 'boolean',
//             label: 'Do you have a special payment type?',
//             isRequired: false,
//             saveAttrib: ABOM_Section2.boolPayment1,
//         },
//         {
//             id: 's2.q.2.a.4',
//             type: 'string',
//             label: 'Select the country of the Payment?',
//             isRequired: false,
//             saveAttrib: ABOM_Section2.numCountry1,
//             endpointKey: "http://myBackEnd/getCountriesCitiesObject", // Populate the list of Countries and the cities of each country
//         },
//         {
//             id: 's2.q.2.a.5',
//                 type: 'string',
//             label: 'Select the city (of that country of the Payment)?',
//             isRequired: false,
//             saveAttrib: ABOM_Section2.numCity1,
//             endpointKey: "http://myBackEnd/getCountriesCitiesObject", // Populate the list of Countries and the cities of each country
//         },
//         SaveCheckPoint{
//             endpointSave: "http://myBackEnd/saveSection2?object=ABOM_Section2" // For dynamic options
//         };
//     ]
    
    
//     Section2_B[
//         {
//             id: 's2.q.2.b.1',
//             type: 'number',
//             label: 'Load from the system the Record for the legal institution',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numIdEntity,
//             endpointKey: "http://myBackEnd/bringObjectForSection2B?id=ABOM_Section2.numIdEntity",
//             endpointKeyType: "Put",
//             constraint:"size<6 digits",
//         },
//         {
//             id: 's2.q.2.b.2',
//             type: 'date',
//             label: 'Do you have a date in the Entity calendar?',
//             isRequired: false,
//             saveAttrib: ABOM_Section2.datMyDate1,
//             conditions: "date>today",
//         },
//         {
//             id: 's2.q.2.b.3',
//             type: 'select',
//             label: 'Select the country of the Entity Payment?',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numCountry2,
//             endpointKey: "http://myBackEnd/getCountriesCitiesObject", // Populate the list of Countries and the cities of each country
//         },
//         {
//             id: 's2.q.2.b.4',
//             type: 'select',
//             label: 'Select the city (of that country of Entity Payment)?',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numCity2,
//             endpointKey: "http://myBackEnd/getCountriesCitiesObject", // Populate the list of Countries and the cities of each country
//         },
//         {
//             id: 's2.q.2.b.4',
//             type: 'select',
//             label: 'Select the currency you will use for payment?',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numCurrencyPay1,
//             endpointKey: "http://myBackEnd/getCurrencies", // Populate the list of Countries and the cities of each country
//         },
//         {
//             id: 's2.q.2.b.5',
//             type: 'select',
//             label: 'Select the country of your Nationality',
//             isRequired: true,
//             saveAttrib: ABOM_Section2.numCountry3,
//             endpointKey: "http://myBackEnd/getCountriesCitiesObject", // Populate the list of Countries and the cities of each country
//         },
//         SaveCheckPoint{
//             endpointSave: "http://myBackEnd/saveSection2?object=ABOM_Section2"// For dynamic options
//         };
//     ]
    
//     // Section focus on Geographical info
//     Section3 [
//         {
//             id: 's3.q.1',
//             type: 'text',
//             label: 'Type your main address',
//             isRequired: true,
//             constraint: regexAddress(),
//             saveAttrib: ABOM_Section3.strAdress,
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.2',
//             type: 'boolean',
//             label: 'Color of your House',
//             isRequired: true,
//             conditions: null,
//             endpointKey: null,
//             saveAttrib: ABOM_Section3.charColor,
//             staticOptions: [ //Notice this option dont come from an Endpoint (but hardcoded)
//                 { label: 'Red', value: 'R' },
//                 { label: 'Green', value: 'G' },
//                 { label: 'Blue', value: 'B' }
//             ], // Static options
//         },
//         {
//             id: 's3.q.3',
//             type: 'select',
//             label: 'Select your country',
//             isRequired: true,
//             saveAttrib: ABOM_Section3.numCountry,
//             conditions: null,
//             staticOptions: null,
//             endpointKey: "http://myBackEnd/getFullGeographyCountryRegionStateCity", // Populate the list of Countries,Regions,States, Cities of each country
//         },
//         {
//             id: 's3.q.4',
//             type: 'select',
//             label: 'Select your region',
//             isRequired: true,
//             saveAttrib: ABOM_Section3.numRegion,
//             conditions: null,
//             staticOptions: null,
//             endpointKey: "http://myBackEnd/getFullGeographyCountryRegionStateCity", // Populate the list of Countries,Regions,States, Cities of each country
//         },
//         {
//             id: 's3.q.5',
//             type: 'select',
//             label: 'Select your state',
//             isRequired: true,
//             saveAttrib: ABOM_Section3.numState,
//             conditions: null,
//             staticOptions: null,
//             endpointKey: "http://myBackEnd/getFullGeographyCountryRegionStateCity", // Populate the list of Countries,Regions,States, Cities of each country
//         },
//         {
//             id: 's3.q.6',
//             type: 'select',
//             label: 'Select your city',
//             isRequired: true,
//             saveAttrib: ABOM_Section3.numCity,
//             conditions: null,
//             staticOptions: null,
//             endpointKey: "http://myBackEnd/getFullGeographyCountryRegionStateCity", // Populate the list of Countries,Regions,States, Cities of each country
//         },
//         {
//             id: 's3.q.7',
//             type: table,
//             label: 'Choose one of the following row in the table',
//             isRequired: true,
//             conditions: null,
//             saveAttrib: ABOM_Section3.strRow,
//             endpointKey: null,
//             staticOptions: null,
//             columns: [name, type, material],
//         },
//         SaveCheckPoint{
//             endpointSave: "http://myBackEnd/saveSection3?object=ABOM_Section3"// For dynamic options
//         };
//     ];
    
//     // Section focus on uploading files
//     Section4 [
//         {
//             id: 's3.q.1',
//             type: 'textArea',// A paragraph
//             label: 'Write the description for the Category Alpha',
//             isRequired: true,
//             constraint: "500 < size < 5000",
//             saveAttrib: ABOM_Section4.strTextFile1,
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.2',
//             type: 'boolean',
//             label: 'Are you allowed to provide a File for that Category? ',
//             isRequired: true,
//             constraint: null,
//             saveAttrib: ABOM_Section4.boolAllowFile1,
//             actions:{
//                 if (YES) { enableQuestion("s3.q.4")},
//                 else (NO)  { disableQuesion("s3.q.4");
//                 }
//             },
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.3',
//             type: 'fileSelector',// A paragraph
//             label: 'Upload the file for Category',
//             isRequired: true,
//             constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
//             saveAttrib: ABOM_Section4.strTextFile2,
//             endpointKey: "http://myBackEnd/saveSection4File?file=1" // POST for the Binary of the File
//         },
//         {
//             id: 's3.q.4',
//             type: 'textArea',// A paragraph
//             label: 'Write the description for the Category Beta',
//             isRequired: true,
//             constraint: "500 < size < 5000",
//             saveAttrib: ABOM_Section4.strTextFile2,
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.5',
//             type: 'boolean',
//             label: 'Are you allowed to provide a File for that Category? ',
//             isRequired: true,
//             constraint: null,
//             saveAttrib: ABOM_Section4.boolAllowFile2,
//             actions:{
//                 if (YES) { enableQuestion("s3.q.6")},
//                 else (NO)  { disableQuesion("s3.q.6");
//                 }
//             },
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.6',
//             type: 'fileSelector',// A paragraph
//             label: 'Upload the file for Category',
//             isRequired: true,
//             constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
//             saveAttrib: ABOM_Section4.strTextFile2,
//             endpointKey: "http://myBackEnd/saveSection4File?file=2" // POST for the Binary of the File
//         },
//         {
//             id: 's3.q.7',
//             type: 'textArea',// A paragraph
//             label: 'Write the description for the Category C',
//             isRequired: true,
//             constraint: "500 < size < 5000",
//             saveAttrib: ABOM_Section4.strTextFile3,
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.8',
//             type: 'boolean',
//             label: 'Are you allowed to provide a File for that Category? ',
//             isRequired: true,
//             constraint: null,
//             saveAttrib: ABOM_Section4.boolAllowFile3,
//             actions:{
//                 if (YES) { enableQuestion("s3.q.6")},
//                 else (NO)  { disableQuesion("s3.q.6");
//                 }
//             },
//             endpointKey: null, // No dynamic options
//         },
//         {
//             id: 's3.q.9',
//             type: 'fileSelector',// A paragraph
//             label: 'Upload the file for Category',
//             isRequired: true,
//             constraint: "extensionAllowed:pdf,xls,doc,txt,jpg : size<10m",
//             saveAttrib: ABOM_Section4.strTextFile3,
//             endpointKey: "http://myBackEnd/saveSection4File?file=2" // POST for the Binary of the File
//         }
//     ]