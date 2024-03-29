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

app.post("/orders", async (req, res) => {
    const orderData = req.body.order;

    if (orderData === null || orderData.items === null || orderData.items.length === 0) {
        return res.status(400).json({ message: "data missing" });
    }

    if (
        orderData.customer.email === null ||
        !orderData.customer.email.includes("@") ||
        orderData.customer.name == null ||
        orderData.customer.name.trim() === "" ||
        orderData.customer.street === null ||
        orderData.customer.street.trim() === "" ||
        orderData.customer["postal-code"] === null ||
        orderData.customer["postal-code"].trim() === "" ||
        orderData.customer.city === null ||
        orderData.customer.city.trim() === ""
    ) {
        return res.status(400).json({ message: "missing data: email, name, street, postal code or city is missing." });
    }

    const newOrder = {
        ...orderData,
        id: (Math.random() * 1000).toString(),
    };

    const orders = await fs.readFile("../server/data/orders.json", "utf8");
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile("../server/data/orders.json", JSON.stringify(allOrders));
    res.status(201).json({ message: "order created" });
});

app.use((req, res) => {
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    }
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
