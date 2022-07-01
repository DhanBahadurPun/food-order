import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.9,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Best Pizza",
    price: 22.9,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Finest fish and veggies",
    price: 22.9,
  },
  {
    id: "m4",
    name: "MO:MO",
    description: "Finest chicken and veggies",
    price: 22.9,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
