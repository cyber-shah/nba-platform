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
  // get team id and season from request body
  const teamId = req.body.teamId;

  try {
    // Call the stored procedure with the appropriate name and parameters
    const results = await db.executeStoredProcedure(procedureName, [
      teamId,
    ]);
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error("Error handling procedure:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
    "team_roster.json"
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
    "team_details.json"
  );
});

module.exports = app;
