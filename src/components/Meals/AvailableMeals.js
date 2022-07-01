import MealsItem from "./MealsItem/MealsItem";
import demoImg from "../assets/food-demo.jpg";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description:
      "Finest fish and veggies, delicious food and healthy for eats, that is my best",
    price: 22.9,
    img: demoImg,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Best Pizza",
    price: 22.9,
    img: demoImg,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Finest fish and veggies",
    price: 22.9,
    img: demoImg,
  },
  {
    id: "m4",
    name: "MO:MO",
    description: "Finest chicken and veggies",
    price: 22.9,
    img: demoImg,
  },
  {
    id: "m5",
    name: "Burger",
    description: "Finest fish and veggies",
    price: 22.9,
    img: demoImg,
  },
  {
    id: "m6",
    name: "MO:MO",
    description: "Finest chicken and veggies",
    price: 22.9,
    img: demoImg,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <Card>
      <MealsItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        imgURL={meal.img}
      />
    </Card>
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
