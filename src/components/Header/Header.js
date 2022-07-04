import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const headerLogoutButton = (
    <Fragment>
      <HeaderCartButton />
      <button className={classes.button} onClick={props.onLogout}>
        Log Out
      </button>
    </Fragment>
  );

  const loginRegisterButton = (
    <Fragment>
      <button className={classes.button} onClick={props.onShowLogin}>
        Sign In
      </button>
      <button className={classes.button}>Sign Up</button>
    </Fragment>
  );

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foods</h1>
        <div className={classes["sub-header"]}>
          {props.login && headerLogoutButton}
          {!props.login && loginRegisterButton}
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table food!" />
      </div>
    </Fragment>
  );
};

export default Header;
