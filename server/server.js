const fs = require("fs/promises");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static("../server/public"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/meals", async (req, res) => {
    const data = await fs.readFile("../server/data/available-meals.json", "utf8");
    res.json(JSON.parse(data));
});

app.use((req, res) => {
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
