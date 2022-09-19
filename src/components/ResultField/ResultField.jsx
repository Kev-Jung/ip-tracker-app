import React from "react";
import "./ResultField.css";

const ResultField = ({ data }) => {
  const { ip, location, timezone, isp } = data;

  const fieldData = [
    {
      id: 1,
      title: "ip address",
      data: ip,
    },
    {
      id: 2,
      title: "location",
      data: location,
    },
    {
      id: 3,
      title: "timezone",
      data: `UTC ${timezone}`,
    },
    {
      id: 4,
      title: "isp",
      data: isp,
    },
  ];

  return (
    <div className="results-container">
      {fieldData.map(({ title, data }) => {
        return (
          <div className="field">
            <h3>{title}</h3>
            <p>{data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResultField;
