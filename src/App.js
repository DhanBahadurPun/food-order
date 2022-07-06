import React, { Fragment } from "react";

import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";
import ScrollHorizontal from "./components/Scroll/ScrollHorizontal";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Meals />
        <ScrollHorizontal />
      </Layout>
    </Fragment>
  );
};

export default App;
