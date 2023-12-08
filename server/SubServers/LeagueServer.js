const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

// Function to handle the common logic for different stored procedures
const handleStoredProcedure = async (req, res, procedureName, logMessage) => {
  console.log(`From LeagueServer: ${logMessage}`);
  try {
    const results = await db.executeStoredProcedure(procedureName);
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Route to handle /seasonTeams
app.post("/seasonTeams", async (req, res) => {
  await handleStoredProcedure(req, res, "get_all_teams", "sending Teams");
});

// Route to handle /seasonStandings
app.post("/seasonStandings", async (req, res) => {
  await handleStoredProcedure(req, res, "get_season_standings", "sending season standings");
});

// Route to handle /seasonPlayers
app.post("/seasonPlayers", async (req, res) => {
  await handleStoredProcedure(req, res, "get_season_points_leaders", "sending player leaders data");
});

// Route to handle /seasonGames
app.post("/seasonGames", async (req, res) => {
  await handleStoredProcedure(req, res, "get_season_games", "sending player leaders data");
});

module.exports = app; // Export the router
