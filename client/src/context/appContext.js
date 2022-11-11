import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";

import { DISPLAY_ALERT, HIDE_ALERT } from "./action";

export const initialValues = {
  alertText: "test",
  alertDisplay: true,
  alertClass: "",
  user: null,
  token: null,
  isLoading: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  //alert functions
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const registerUser = async () => {
    console.log("register");
  };

  const logUserIn = async () => {
    console.log("logging user in");
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, hideAlert, registerUser, logUserIn }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
