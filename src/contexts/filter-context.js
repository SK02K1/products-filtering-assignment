import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "reducers";

const FilterContext = createContext(null);

export const initialFilterState = {
  sortBy: "",
  selectedSizes: [],
  selectedBrands: [],
  selectedGenders: []
};

export const FilterProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(
    filterReducer,
    initialFilterState
  );
  return (
    <FilterContext.Provider value={{ filterState, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
