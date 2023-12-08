const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");


app.post("/seasonTeams", async (req, res) => {
  console.log("From LeagueServer: sending Teams");
  try {
    const results = await db.executeStoredProcedure(
      "get_all_teams");
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/seasonStandings", async (req, res) => {
  console.log("From LeagueServer: sending season standings");
  try {
    const results = await db.executeStoredProcedure(
      "get_season_standings");
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/seasonPlayers", async (req, res) => {
  console.log("From LeagueServer: sending player leaders data");
  // TODO: Implement the logic here to get the data from the database
  try {
    const results = await db.executeStoredProcedure(
      "get_season_points_leaders");
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/seasonGames", async (req, res) => {
  console.log("From LeagueServer: sending player leaders data");
  // TODO: Implement the logic here to get the data from the database
  try {
    const results = await db.executeStoredProcedure(
      "get_season_games");
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = app; // Export the router