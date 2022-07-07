import React, { Fragment } from "react";

import classes from "./App.module.css";
import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";
import ScrollHorizontal from "./components/Scroll/ScrollHorizontal";

const Scroll = () => {
  const l = () => {
    scrollLeft(document.getElementById("content"), -300, 1000);
  };

  const r = () => {
    scrollLeft(document.getElementById("content"), 300, 1000);
  };

  function scrollLeft(element, change, duration) {
    var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;

    console.log(start);

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  return (
    <div>
      <div className={classes["left"]}>
        left div
        <button id="left-button" onClick={l}>
          swipe left
        </button>
      </div>
      <div className={classes["center"]} id="content">
        <div className={classes["internal"]}>div 1</div>
        <div className={classes["internal"]}>div 2</div>
        <div className={classes["internal"]}>div 3</div>
        <div className={classes["internal"]}>div 4</div>
        <div className={classes["internal"]}>div 5</div>
        <div className={classes["internal"]}>div 6</div>
        <div className={classes["internal"]}>div 7</div>
        <div className={classes["internal"]}>div 8</div>
      </div>
      <div className="right">
        <button id="right-button" onClick={r}>
          swipe right
        </button>
        right div
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Meals />
        <Scroll />
        <ScrollHorizontal />
      </Layout>
    </Fragment>
  );
};

export default App;
