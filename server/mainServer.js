// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5555;
const leagueRouter = require("./LeagueServer");
const DBrouter = require("./DBServer");
const teamRouter = require("./TeamsServer");


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


app.use("/api/league", leagueRouter);
app.use("/api/teams", teamRouter);
app.use("/api/db", DBrouter);



// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
