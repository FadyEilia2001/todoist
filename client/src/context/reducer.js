import { DISPLAY_ALERT, HIDE_ALERT } from "./action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      alertText: "Please Provide All Values",
      alertClass: "danger",
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
  throw new Error(`no such action: ${action.type}`);
};
export default reducer;
