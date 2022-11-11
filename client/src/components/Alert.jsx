import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertClass } = useAppContext();

  return (
    <div className="w-64 flex justify-center">
      <p className={`text-center rounded-l alert alert-${alertClass}`}>
        {alertText}
      </p>
    </div>
  );
};
export default Alert;
