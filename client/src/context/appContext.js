import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";

import { DISPLAY_ALERT, HIDE_ALERT } from "./action";

export const initialValues = {
  alertText: "",
  alertDisplay: false,
  alertClass: "",
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const displayAlert = (text) => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };
  const [state, dispatch] = useReducer(reducer, initialValues);
  // const [state, setState] = useState(initialValues);
  return (
    <AppContext.Provider value={{ ...state, displayAlert, hideAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
