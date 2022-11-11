import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./action";

export const initialValues = {
  alertText: "",
  alertDisplay: false,
  alertClass: "",
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("accessToken") || null,
  isLoading: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  console.log(state);
  //alert functions
  const displayAlert = (alertMsg) => {
    dispatch({ type: DISPLAY_ALERT, payload: { msg: alertMsg } });
  };

  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const registerUser = async ({ name, email, password }) => {
    dispatch({ type: REGISTER_USER_START });

    try {
      const response = await axios.post("/api/v1/auth/register", {
        password,
        firstName: name,
        email,
      });

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { token: response.data.token, user: response.data.user },
      });

      localStorage.setItem("accessToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
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

// data
// :
// token
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZkYzdjNTA4ZmEyYTllYjg2ZGUxOTMiLCJpYXQiOjE2NjgxMzg5NDksImV4cCI6MTY3MDczMDk0OX0.spfXINJrdhYYqtvePIRIKw00ISKAF8Qv1pvTUd4RErY"
// user
// :
// {firstName: 'fady', email: 'Fady2e434@gmail.com'}
