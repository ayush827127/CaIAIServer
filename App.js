// userRegistration.js

const express = require("express");
const { sendWelcomeEmail, sendPurchaseEmail } = require("./Node");

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
require('dotenv').config();


// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your frontend origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/register", (req, res) => {
  // Logic to handle user registration
  const { email, userName } = req.body;

  // Send welcome email
  sendWelcomeEmail(email, userName);

  res.status(200).json({ message: "User registered successfully" });
});

app.post("/purchase", (req, res) => {
  // Logic to handle user registration
  const { email, userName } = req.body;

  // Send welcome email
  sendPurchaseEmail(email, userName);
  res.status(200).json({ message: "Product purchased successfully" });
});
app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
