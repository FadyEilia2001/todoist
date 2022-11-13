import React, { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOG_USER_START,
  LOG_USER_SUCCESS,
  LOG_USER_ERROR,
  TOGGLE_MOBILE_MENU,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "./action";

export const initialValues = {
  alertText: "",
  alertDisplay: false,
  alertClass: "",
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("accessToken") || null,
  isLoading: false,
  mobilMenuDisplay: false,
  isSidebarOpen: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  //mobile menu
  const toggleMobileMenu = () => {
    dispatch({ type: TOGGLE_MOBILE_MENU });
  };

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
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          password,
          firstName: name,
          email,
        }
      );

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { token: response.data.token, user: response.data.user },
      });

      localStorage.setItem("accessToken", `Bearer ${response.data.token}`);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const logUserIn = async ({ email, password }) => {
    dispatch({ type: LOG_USER_START });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      dispatch({
        type: LOG_USER_SUCCESS,
        payload: { token: response.data.token, user: response.data.user },
      });
      localStorage.setItem("accessToken", `Bearer ${response.data.token}`);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOG_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        hideAlert,
        registerUser,
        logUserIn,
        toggleMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
