// Define the functions that simulate the responses from backend APIs
export const generateTransactionID = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ transactionID: "TXN123456789" });
      }, 1500);
    });
  };
  
  export const getGeographyData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          countries: ["USA", "Canada", "UK"],
          regions: ["North America", "Europe"],
          states: ["California", "Ontario", "London"],
          cities: ["Los Angeles", "Toronto", "London"]
        });
      }, 1500);
    });
  };
  
  export const getCurrenciesData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          currencies: ["USD", "EUR", "GBP", "CAD"],
          defaultCurrency: "USD"
        });
      }, 1500);
    });
  };
  
  export const getCountriesCitiesData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          countries: ["India", "Germany", "France"],
          cities: ["Delhi", "Berlin", "Paris"]
        });
      }, 1500);
    });
  };