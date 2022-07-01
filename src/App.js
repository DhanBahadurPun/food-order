import React, { Fragment } from "react";

import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Meals />
      </Layout>
    </Fragment>
  );
};

export default App;
