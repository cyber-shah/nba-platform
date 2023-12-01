const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "POST",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/seasonTeams", async (req, res) => {
  console.log("From LeagueServer: request received by teams server successfully ");
  try {
    const filePath = path.join(__dirname, "./../jsons/fromNBA/all_teams.json");
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app; // Export the router
