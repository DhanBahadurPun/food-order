import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputHasError = props.emailInputClasses || props.passwordInputClasses;

  return (
    <div className={`${classes.flex} ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        className={inputHasError}
        checked={props.value}
      />
    </div>
  );
};

export default Input;
