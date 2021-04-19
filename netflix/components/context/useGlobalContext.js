import React from "react";
import { AppContext } from "./context";

export const useGlobalContext = () => {
  const context = React.useContext(AppContext);
  return context;
};
