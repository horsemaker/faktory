import React from "react";
import { FiltersProvider } from "./contexts";

const AppProvider = ({ children }) => {
  return <FiltersProvider>{children}</FiltersProvider>;
};

export default AppProvider;
