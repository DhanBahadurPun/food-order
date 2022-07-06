import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes["summary"]}>
      <h2 className={classes["summary_heading"]}>
        Delicious Food, Delivered To You
      </h2>
      <p className={classes["summary_paragraph"]}>
        Choose your favorite mean from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes["summary_paragraph"]}>
        All your meals are cooked with high quality ingredients, just in time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
