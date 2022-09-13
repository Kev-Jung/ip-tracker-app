import React from "react";
import "./ResultField.css";
import Field from "../Field/Field";

const ResultField = ({ data }) => {
  const transformData = () => {
    for (let key in data) {
      <Field name={key} value={data[key]} />;
    }
  };

  return <div>{transformData()}</div>;
};

export default ResultField;
