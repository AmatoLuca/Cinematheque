import React, { useContext } from "react";
import AlertContext from "../../../context/alert/alertContext";


const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className="alert-wrapper">
        <div className={`alert alert-${alert.type}`}>
          <div className="alert-text ">{alert.msg}</div>
        </div>
      </div>
    )
  );
};

export default Alert;
