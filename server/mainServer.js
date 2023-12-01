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

// include the leagueRouter
const leagueRouter = require("./LeagueServer");
// Use the router with a specific prefix
app.use("/api/league", leagueRouter);


const DBrouter = require("./DBServer");
app.use("/api/db", DBrouter);



// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
