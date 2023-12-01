const express = require("express");
const app = express();
const path = require("path");


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

app.post("/seasonStandings", async (req, res) => {
  console.log("From LeagueServer: request received by standings server successfully ");

});

module.exports = app; // Export the router
