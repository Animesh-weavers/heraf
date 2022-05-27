import React from "react";
import "./titles.css";

const Title = (props) => {
  return (
    <h1 className="title">
      {props.title}<sup>({props.sup})</sup>
    </h1>
  );
};

export default Title;
