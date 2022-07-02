import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.flex}>
      <label>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
