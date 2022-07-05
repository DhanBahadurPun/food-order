import React from "react";
import Input from "../UI/Input/Input";

import Modal from "./Modal";
import classes from "./Login.module.css";
import imgURL from "../assets/food-demo.jpg";
import CancelIcon from "../Cart/CancelIcon";
import useInput from "../hooks/use-input";

const Login = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHaldler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    blurChangeHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && value.length >= 8);

  const {
    checkedValue,
    isValid: chedkedValueIsValid,
    hasError: checkedInputHasError,
    checkedChangeHandler: checkedChangeHaldler,
    blurChangeHandler: checkedBlurHandler,
    reset: resetCheckedInput,
  } = useInput((value) => value !== false);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid && chedkedValueIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredEmail, enteredPassword, checkedValue);

    resetEmailInput();
    resetPasswordInput();
    resetCheckedInput();
  };

  const emailInputClasses = emailInputHasError ? classes.invalid : "";
  const passwordInputClasses = passwordInputHasError ? classes.invalid : "";
  const checkedInputClasses = checkedInputHasError ? classes.invalid : "";

  return (
    <Modal onHideLogin={props.onHideLogin}>
      <div className={classes["login-card"]}>
        <div className={classes["login-card__image"]}>
          <img src={imgURL} alt="login" />
        </div>
        <div className={classes["login-card__body"]}>
          <div className={classes["login-card__body-heading"]}>
            <h3 className={classes["login-card__body-heading_title"]}>
              Login to Food Order
            </h3>
            <div
              className={classes["login-card__body-heading_icon"]}
              onClick={props.onHideLogin}
            >
              <CancelIcon />
            </div>
          </div>
          <form onSubmit={onSubmitHandler}>
            <Input
              label="Email:"
              value={enteredEmail}
              emailInputClasses={emailInputClasses}
              onChange={emailChangeHaldler}
              onBlur={emailBlurHandler}
              input={{
                id: "email",
                type: "email",
                placeholder: "You@gmail.com",
              }}
            />

            <Input
              label="Password:"
              value={enteredPassword}
              passwordInputClasses={passwordInputClasses}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              input={{
                id: "password",
                type: "password",
              }}
            />

            <Input
              label="Remember Me"
              value={checkedValue}
              checkedInputClasses={checkedInputClasses}
              className={classes.checked}
              onChange={checkedChangeHaldler}
              onBlur={checkedBlurHandler}
              input={{
                id: "checkbox",
                type: "checkbox",
              }}
            />
            <div className={classes.actions}>
              <button
                className={classes.button}
                disabled={!formIsValid}
                onClick={props.onLogin}
              >
                Login
              </button>
            </div>
          </form>
          <div className={classes["login-card__body-footer"]}>
            <div className={classes["login-card__body-footer_title"]}>
              <span className={classes["login-card__body-footer_text"]}>
                Don't have account?
              </span>
              <a href="/" className={classes["login-card__body-footer_link"]}>
                Signup
              </a>
            </div>
            <a href="/" className={classes["login-card__body-footer_link"]}>
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
