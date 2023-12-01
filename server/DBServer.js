const express = require("express");
const app = express();
const db = require("./db");

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("From Server -- " + username + " " + password);
  // use a try and catch block to
  // catch errors instead throwing them up
  try {
    // Call the connect function from your module
    const result = await db.connect(username, password);
    // if no errors
    res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    res.status(401).json({
      message: "Login failed",
      error: error,
    });
  }
});

module.exports = app; // Export the router