import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Button from "../UI/Button/Button";

const Header = (props) => {
  const headerLogoutButton = (
    <Fragment>
      <HeaderCartButton />
      <Button onLogout={props.onLogout}>Log Out</Button>
    </Fragment>
  );

  const loginRegisterButton = (
    <Fragment>
      <Button onShowLogin={props.onShowLogin}>Sign In</Button>
      <Button>Sign Up</Button>
    </Fragment>
  );

  return (
    <Fragment>
      <header className={classes["navbar"]}>
        <h1 className={classes["navbar_title"]}>Foods</h1>
        <div className={classes["navbar_list"]}>
          {props.login && headerLogoutButton}
          {!props.login && loginRegisterButton}
        </div>
      </header>
      <div className={classes["image-container"]}>
        <img
          src={mealsImage}
          alt="A table food!"
          className={classes["image-container_img"]}
        />
      </div>
    </Fragment>
  );
};

export default Header;
