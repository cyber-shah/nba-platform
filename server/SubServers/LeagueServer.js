const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

// Function to handle the common logic for different stored procedures
const handleStoredProcedure = async (
  req,
  res,
  procedureName,
  logMessage,
  inputs
) => {
  try {
    var results;
    if (!inputs) {
       results = await db.executeStoredProcedure(procedureName);    }
    else {
       results = await db.executeStoredProcedure(procedureName, [inputs]);
    }
    console.log(`From LeagueServer: ${logMessage}`);
    console.log("Stored procedure results:", results);
    res.json(results);
  } catch (error) {
    console.error("Error sending JSON file:", error);
    res.json({ error: "Internal Server Error" });
  }
};

// Route to handle /seasonTeams
app.post("/seasonTeams", async (req, res) => {
  await handleStoredProcedure(req, res, "get_all_teams", "sending Teams");
});

// Route to handle /seasonStandings
app.post("/seasonStandings", async (req, res) => {
  await handleStoredProcedure(
    req,
    res,
    "get_season_standings",
    "sending season standings",
    "2023-24"
  );
});


// Route to handle /seasonPlayers
app.post("/seasonPlayers", async (req, res) => {
  await handleStoredProcedure(
    req,
    res,
    "get_player_stats_per_year",
    "sending player leaders data",
    "2023-24"
  );
});

// Route to handle /seasonGames
app.post("/seasonGames", async (req, res) => {
  await handleStoredProcedure(
    req,
    res,
    "get_season_games",
    "sending games data",
    "2023-24"
  );
});

module.exports = app; // Export the router
