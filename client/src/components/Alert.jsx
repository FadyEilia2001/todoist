import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertClass } = useAppContext();

  return (
    <div className="w-64 flex justify-center">
      <p
        className={`py-2 w-full rounded-md text-lg px-4 text-black; text-center rounded-l ${alertClass}`}
      >
        {alertText}
      </p>
    </div>
  );
};
export default Alert;
