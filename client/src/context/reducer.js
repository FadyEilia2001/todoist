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
  TOGGLE_SIDEBAR,
  TOGGLE_NEWTASK_MODAL,
} from "./action";

const reducer = (state, action) => {
  if (action.type === TOGGLE_MOBILE_MENU) {
    return {
      ...state,
      mobilMenuDisplay: !state.mobilMenuDisplay,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      alertText: action.payload.msg || "Please Provide All Values",
      alertClass: "bg-red-100",
      alertDisplay: true,
    };
  }
  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      alertText: "",
      alertClass: "",
      alertDisplay: false,
    };
  }
  if (action.type === REGISTER_USER_START) {
    return {
      ...state,
      alertText: "creating user account",
      alertDisplay: false,
      alertClass: "",
      isLoading: true,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      alertText: "successful",
      alertDisplay: true,
      alertClass: "bg-green-200",
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
      alertDisplay: true,
      alertClass: "bg-red-200",
      isLoading: false,
    };
  }

  if (action.type === LOG_USER_START) {
    return {
      ...state,
      alertText: "Logging in...",
      alertDisplay: true,
      alertClass: "bg-green-200",
      isLoading: true,
    };
  }
  if (action.type === LOG_USER_SUCCESS) {
    return {
      ...state,
      alertText: "successful logIn redirecting...",
      alertDisplay: true,
      alertClass: "bg-green-200",
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }

  if (action.type === LOG_USER_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
      alertDisplay: true,
      alertClass: "bg-red-200",
      isLoading: false,
    };
  }

  if (action.type === TOGGLE_NEWTASK_MODAL) {
    return {
      ...state,
      isTaskModalOpen: !state.isTaskModalOpen,
    };
  }
  throw new Error(`no such action: ${action.type}`);
};
export default reducer;

// export const initialValues = {
//   alertText: "",
//   alertDisplay: false,
//   alertClass: "",
//   user: null,
//   token: null,
//   isLoading: false,
// };
