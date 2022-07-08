import { useReducer } from "react";
import { createContext, useContext } from "react";
import { filtersReducer, initialFiltersState } from "../reducers";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    initialFiltersState
  );

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider.");
  }

  return context;
};

export { FiltersProvider, useFilters };
