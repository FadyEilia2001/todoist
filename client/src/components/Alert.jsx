import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertClass } = useAppContext();
  console.log(alertClass);
  return (
    <div className="w-2/3 md:w-1/2 flex justify-center">
      <p className={`text-center alert alert-${alertClass}`}>{alertText}</p>
    </div>
  );
};
export default Alert;
