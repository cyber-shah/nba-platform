const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "POST",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

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