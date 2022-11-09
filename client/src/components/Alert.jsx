import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertDisplay, alertClass } = useAppContext();
  console.log(alertText);
  return (
    <div className="w-2/3 md:w-1/2 flex justify-center">
      <p className={`alert alert-${alertClass}`}>{alertText}</p>
    </div>
  );
};
export default Alert;
