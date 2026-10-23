
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to ShopEasy</h1>
    <p>Your DevOps-enabled e-commerce application is running!</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Headphones", price: 1500 },
    { id: 3, name: "Keyboard", price: 900 }
  ]);
});


 if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ShopEasy running on port ${PORT}`);
  });
}

module.exports = app;