import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

const Meals = () => {
    const { data: loadedMeals, isLoading, error } = useHttp("http://localhost:5000/meals", requestConfig, []);

    // if (isLoading) {
    //     return <p>Fetching Meals...</p>;
    // }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
};

export default Meals;
