// Define the functions that simulate the responses from backend APIs
export const generateTransactionID = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ transactionID: 'TXN123456789' });
    }, 1500);
  });
};

export const getGeographyData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        countries: [
          {
            name: 'USA',
            code: 'US',
            regions: [
              {
                name: 'North America',
                code: 'NA',
                states: [
                  {
                    name: 'California',
                    code: 'CA',
                    cities: [
                      { name: 'Los Angeles', code: 'LA' },
                      { name: 'San Francisco', code: 'SF' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Canada',
            code: 'CA',
            regions: [
              {
                name: 'North America',
                code: 'NA',
                states: [
                  {
                    name: 'Ontario',
                    code: 'ON',
                    cities: [
                      { name: 'Toronto', code: 'TO' },
                      { name: 'Ottawa', code: 'OT' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'UK',
            code: 'GB',
            regions: [
              {
                name: 'Europe',
                code: 'EU',
                states: [
                  {
                    name: 'London',
                    code: 'LDN',
                    cities: [
                      { name: 'London', code: 'LDN' },
                      { name: 'Manchester', code: 'MAN' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    }, 1500);
  });
};

export const getCurrenciesData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" },
        { label: "GBP", value: "GBP" },
        { label: "CAD", value: "CAD" },
      ]);
    }, 1500);
  });
};


export const getCountriesCitiesData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        countries: [
          {
            name: 'India',
            code: 'IND',
            cities: [
              { name: 'Delhi', code: 'DEL' },
              { name: 'Mumbai', code: 'BOM' },
              { name: 'Bangalore', code: 'BLR' },
            ],
          },
          {
            name: 'Germany',
            code: 'DEU',
            cities: [
              { name: 'Berlin', code: 'BER' },
              { name: 'Munich', code: 'MUC' },
              { name: 'Frankfurt', code: 'FRA' },
            ],
          },
          {
            name: 'France',
            code: 'FRA',
            cities: [
              { name: 'Paris', code: 'PAR' },
              { name: 'Lyon', code: 'LYS' },
              { name: 'Marseille', code: 'MRS' },
            ],
          },
        ],
      });
    }, 1500);
  });
};
