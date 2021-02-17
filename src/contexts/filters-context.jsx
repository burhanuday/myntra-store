/* 
  Context provider to keep track of auth state of the app
  Also stores the user object from firebase for use
*/

import React, { useState, useEffect } from "react";

const FiltersContext = React.createContext();

const FiltersProvider = ({ children }) => {
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  return (
    <FiltersContext.Provider
      value={{ brandsFilter, setBrandsFilter, priceFilters, setPriceFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => {
  const context = React.useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};

export { FiltersProvider, useFilters };
