import React, { Fragment, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Form/Login";

const Layout = ({ children }) => {
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <Fragment>
      {loginIsShown && <Login onHideLogin={hideLoginHandler} />}
      <Header onShowLogin={showLoginHandler} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
