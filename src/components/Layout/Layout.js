import React, { Fragment, useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Form/Login";

const Layout = ({ children }) => {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInInformation = localStorage.getItem("isLoggedIn");
    if (loggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const showLoginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <Fragment>
      {loginIsShown && (
        <Login onHideLogin={hideLoginHandler} onLogin={loginHandler} />
      )}
      <Header
        onShowLogin={showLoginHandler}
        onLogout={logoutHandler}
        login={isLoggedIn}
      />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
