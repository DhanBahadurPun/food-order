import { Fragment } from "react";
import LeftIcon from "../Cart/LeftIcon";
import RightIcon from "../Cart/RightIcon";

import classes from "./ScrollHorizontal.module.css";

const ScrollHorizontal = () => {
  document.getElementById("left-button").onclick = function () {
    scrollLeft(document.getElementById("content"), -300, 1000);
  };

  document.getElementById("right-button").onclick = function () {
    scrollLeft(document.getElementById("content"), 300, 1000);
  };

  // const buttonHandler = () => {
  //   scrollLeft(document.getElementById("content"), -300, 1000);
  // };

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
    <Fragment>
      <div className={classes["scroll-container"]}>
        <ul>
          <button id="left-button">
            <LeftIcon />
          </button>
          <div className={classes["center"]} id="content">
            <div>
              <li className={classes["internal"]}>list 1</li>
              <li className={classes["internal"]}>list 2</li>
              <li className={classes["internal"]}>list 3</li>
              <li className={classes["internal"]}>list 4</li>
              <li className={classes["internal"]}>list 5</li>
              <li className={classes["internal"]}>list 6</li>
              <li className={classes["internal"]}>list 7</li>
              <li className={classes["internal"]}>list 8</li>
              <li className={classes["internal"]}>list 9</li>
              <li className={classes["internal"]}>list 10</li>
            </div>
          </div>
          <button id="right-button">
            <RightIcon />
          </button>
        </ul>
      </div>
    </Fragment>
  );
};

export default ScrollHorizontal;
