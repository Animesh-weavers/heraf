import React, { useState } from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";
import "./SelectCountryWithFlag.css";

const SelectCountryWithFlag = (props) => {
  //static json data
  const [data] = useState([
    {
      id: 0,
      value: "USA",
      country: "USA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      ),
    },
    {
      id: 1,
      value: "UK",
      country: "UK",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      ),
    },
  ]);
  const handleChange = (e) => {
    props.selectCountryHandler(e.country);
  };
  return (
    <>
      <Form.Label className="labels">Country *</Form.Label>
      <Select
        className="react-select-component"
        defaultValue={data[0]}
        options={data}
        onChange={handleChange}
        getOptionLabel={(e) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {e.icon}
            <span style={{ marginLeft: "5px" }}>{e.country}</span>
          </div>
        )}
        required
      />
    </>
  );
};

export default SelectCountryWithFlag;
