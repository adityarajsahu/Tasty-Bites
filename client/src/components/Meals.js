import { useState, useEffect } from "react";

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
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    );
};

export default Meals;
