import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";

import { DISPLAY_ALERT, HIDE_ALERT } from "./action";

export const initialValues = {
  alertText: "test",
  alertDisplay: true,
  alertClass: "",
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
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
