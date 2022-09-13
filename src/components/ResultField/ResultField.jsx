import React from "react";
import "./ResultField.css";

const ResultField = ({ data }) => {
  const { ip, location, timezone, isp } = data;
  return (
    <div className="results-container">
      <div className="field">
        <h3>ip address</h3>
        <p>{ip}</p>
      </div>
      <div className="field">
        <h3>location</h3>
        <p>{location}</p>
      </div>
      <div className="field">
        <h3>timezone</h3>
        <p>{`UTC ${timezone}`}</p>
      </div>
      <div className="field">
        <h3>isp</h3>
        <p>{isp}</p>
      </div>
    </div>
  );
};

export default ResultField;
