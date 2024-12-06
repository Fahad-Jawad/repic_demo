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
        USA: {
          id: 1,
          code: 'US',
          regions: [
            {
              id: 101,
              name: 'North America',
              code: 'NA',
              states: [
                {
                  id: 1001,
                  name: 'California',
                  code: 'CA',
                  cities: [
                    { id: 10001, name: 'Los Angeles', code: 'LA' },
                    { id: 10002, name: 'San Francisco', code: 'SF' },
                  ],
                },
              ],
            },
          ],
        },
        Canada: {
          id: 2,
          code: 'CA',
          regions: [
            {
              id: 102,
              name: 'North Canada',
              code: 'NA',
              states: [
                {
                  id: 1002,
                  name: 'Ontario',
                  code: 'ON',
                  cities: [
                    { id: 10003, name: 'Toronto', code: 'TO' },
                    { id: 10004, name: 'Ottawa', code: 'OT' },
                  ],
                },
              ],
            },
          ],
        },
        UK: {
          id: 3,
          code: 'GB',
          regions: [
            {
              id: 103,
              name: 'Europe',
              code: 'EU',
              states: [
                {
                  id: 1003,
                  name: 'London',
                  code: 'LDN',
                  cities: [
                    { id: 10005, name: 'London', code: 'LDN' },
                    { id: 10006, name: 'Manchester', code: 'MAN' },
                  ],
                },
              ],
            },
          ],
        },
      }
      );
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
        India: {
          id: 1,
          code: 'IND',
          cities: [
            { id: 101, name: 'Delhi', code: 'DEL' },
            { id: 102, name: 'Mumbai', code: 'BOM' },
            { id: 103, name: 'Bangalore', code: 'BLR' },
          ],
        },
        Germany: {
          id: 2,
          code: 'DEU',
          cities: [
            { id: 201, name: 'Berlin', code: 'BER' },
            { id: 202, name: 'Munich', code: 'MUC' },
            { id: 203, name: 'Frankfurt', code: 'FRA' },
          ],
        },
        France: {
          id: 3,
          code: 'FRA',
          cities: [
            { id: 301, name: 'Paris', code: 'PAR' },
            { id: 302, name: 'Lyon', code: 'LYS' },
            { id: 303, name: 'Marseille', code: 'MRS' },
          ],
        },
      }
      );
    }, 1500);
  });
};
