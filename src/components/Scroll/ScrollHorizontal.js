import { Fragment } from "react";

import LeftIcon from "../Cart/LeftIcon";
import RightIcon from "../Cart/RightIcon";
import demoImg from "../assets/food-demo.jpg";
import classes from "./ScrollHorizontal.module.css";

const ScrollHorizontal = () => {
  const leftButtonHandler = () => {
    scrollTo(document.getElementById("content"), -300, 1000);
  };

  const rightButtonHandler = () => {
    scrollTo(document.getElementById("content"), -300, 1000);
  };

  function scrollTo(element, to, duration) {
    var start = element.scrollLeft,
      change = to - start,
      currentTime = 0,
      increment = 20;
    console.log(start);
    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
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
      <div className={classes.main}>
        <div className={classes["main-scroll-div"]}>
          <div className={classes.button} onClick={leftButtonHandler}>
            <LeftIcon />
          </div>
          <div className={classes.cover} id="content">
            <div className={classes["scroll-images"]}>
              <div className={classes.child}>
                <img
                  className={classes["child-img"]}
                  src={demoImg}
                  alt="list of meals"
                />
              </div>
              <div className={classes.child}>
                <img
                  className={classes["child-img"]}
                  src={demoImg}
                  alt="list of meals"
                />
              </div>
              <div className={classes.child}>
                <img
                  className={classes["child-img"]}
                  src={demoImg}
                  alt="list of meals"
                />
              </div>
              <div className={classes.child}>
                <img
                  className={classes["child-img"]}
                  src={demoImg}
                  alt="list of meals"
                />
              </div>
              <div className={classes.child}>
                <img
                  className={classes["child-img"]}
                  src={demoImg}
                  alt="list of meals"
                />
              </div>
            </div>
          </div>
          <div className={classes.button} onClick={rightButtonHandler}>
            <RightIcon />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScrollHorizontal;
