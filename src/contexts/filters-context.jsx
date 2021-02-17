/* 
  Context provider to keep track of the filters 
*/

import React, { useState } from "react";

const FiltersContext = React.createContext();

const FiltersProvider = ({ children }) => {
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        brandsFilter,
        setBrandsFilter,
        priceFilters,
        setPriceFilters,
        searchQuery,
        setSearchQuery,
        sort,
        setSort,
      }}
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
