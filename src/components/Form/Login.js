import React from "react";
import Input from "../UI/Input/Input";

import Modal from "./Modal";
import classes from "./Login.module.css";
import imgURL from "../assets/food-demo.jpg";
import CancelIcon from "../Cart/CancelIcon";

const Login = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal onHideLogin={props.onHideLogin}>
      <div className={classes.flex}>
        <img src={imgURL} alt="login" />
        <div className={classes["form-content"]}>
          <div className={`${classes.flex} ${classes["v-center"]}`}>
            <h3>Login to Food Order</h3>
            <div className={classes.icon} onClick={props.onHideLogin}>
              <CancelIcon />
            </div>
          </div>
          <form onSubmit={onSubmitHandler}>
            <Input
              label="Email:"
              input={{
                id: "email",
                type: "email",
                placeholder: "You@gmail.com",
              }}
            />
            <Input
              label="Password:"
              input={{
                id: "password",
                type: "password",
              }}
            />
            <Input
              label="Remember Me"
              className={classes.checked}
              input={{
                id: "checked",
                type: "checkbox",
                value: "true/false",
              }}
            />
            <div className={classes.actions}>
              <button className={classes.button} onClick={props.onLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
