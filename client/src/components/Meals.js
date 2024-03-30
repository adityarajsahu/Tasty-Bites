import { useState, useEffect } from "react";

import MealItem from "./MealItem";

const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const repsonse = await fetch("http://localhost:5000/meals");

            if (!repsonse.ok) {
                throw new Error("Something went wrong!");
            }

            const meals = await repsonse.json();
            setLoadedMeals(meals);
        };

        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
};

export default Meals;
