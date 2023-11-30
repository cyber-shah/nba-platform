// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = 5555;

/**
 * CORS middleware configuration to handle cross-origin requests.
 * Allows requests from 'http://localhost:3000' and specifies allowed methods.
 */
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

/**
 * Endpoint to handle POST requests containing SQL queries.
 * Calls executeQuery inside db.js and responds with the query result.
 */
app.post("/api/query", async (req, res) => {
  // Extract the SQL query from the request body
  const inputQuery = req.body.text;
  console.log("Received by Server -- " + inputQuery);

  try {
    // Execute the SQL query and send the result as JSON response
    const result = await db.executeQuery(inputQuery);
    res.json({ result });
  } catch (err) {
    // Handle errors during query execution and send a 500 Internal Server Error response
    console.error("Error executing database query:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});






app.post("/api/teams", async (req, res) => {
  const filePath = path.join(
    __dirname,
    "/jsons/fromNBA/all_teams.json"
  );
  // Send the JSON file as the response
  res.sendFile(filePath);
});






// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
