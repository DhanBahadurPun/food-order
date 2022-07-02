import React from "react";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const { id, name, description, price, imgURL } = props;
  return (
    <li key={id}>
      <div className={classes.content}>
        <div className={classes["content-img-btn"]}>
          <img src={imgURL} alt={name} />
          <button>Order</button>
        </div>
        <div className={classes.details}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </div>
    </li>
  );
};

export default MealsItem;
