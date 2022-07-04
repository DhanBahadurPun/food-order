import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <section className={classes.card} key={props.unique}>
      {props.children}
    </section>
  );
};

export default Card;
