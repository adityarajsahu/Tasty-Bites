import React, { useEffect } from "react";

import Header from "./components/Header";

function App() {
    useEffect(() => {
        fetch("http://localhost:5000/meals")
            .then((res) => res.json())
            .then(console.log);
    }, []);

    return (
        <React.Fragment>
            <Header />
        </React.Fragment>
    );
}

export default App;
