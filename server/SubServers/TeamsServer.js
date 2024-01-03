const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");

// Function to handle the common logic for different procedures
const handleProcedure = async (
  req,
  res,
  procedureName,
  logMessage,
) => {
  console.log(`From TeamServer: ${logMessage}`);
  console.log("Request body:", req.body);
  // get team id and season from request body
  const team_id = req.body.team_id;
  const seasonYear = req.body.seasonYear;

  try {
    console.log("Calling stored procedure:", procedureName, team_id, seasonYear);
    // Call the stored procedure with the appropriate name and parameters
    const results = await db.executeStoredProcedure(procedureName, [
      team_id, seasonYear
    ]);
    console.log("Stored procedure results:", results);
    res.json(results);
  } catch (error) {
    console.error("Error handling procedure:", error);
    res.json({ error: "Internal Server Error" });
  }
};

// Route to handle /teamSchedule
app.post("/teamSchedule", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_team_schedule",
    "request received by teamSchedule server successfully"
  );
});

// Route to handle /teamRoster
app.post("/teamRoster", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_team_roster",
    "request received by teamRoster server successfully",
  );
});

// Route to handle /teamStats
app.post("/teamStats", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_team_stats",
    "request received by teamStats server successfully"
  );
});

// Route to handle /teamDetails
app.post("/teamDetails", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_team_details",
    "request received by teamDetails server successfully",
  );
});

module.exports = app;
