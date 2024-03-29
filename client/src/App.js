import { useEffect } from "react";

function App() {
    useEffect(() => {
        fetch("http://localhost:5000/meals")
            .then((res) => res.json())
            .then(console.log);
    }, []);

    return (
        <>
            <h1>Tasty Bites</h1>
        </>
    );
}

export default App;
