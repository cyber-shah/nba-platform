const express = require("express");
const app = express();
const db = require("./db");

// Function to handle the common logic for different routes
const handleProcedure = async (req, res, procedureName, logMessage) => {
  console.log(`From TeamServer: ${logMessage}`);
  // get team id and season from request body
  const playerID = req.body.player_id;
  const seasonYear = req.body.seasonYear;

  try {
    console.log("Calling stored procedure:", procedureName,seasonYear,  playerID );
    // Call the stored procedure with the appropriate name and parameters
    const results = await db.executeStoredProcedure(procedureName, [
      seasonYear, playerID
    ]);
    console.log("Stored procedure results:", results);
    res.json(results[0]);
  } catch (error) {
    console.error("Error handling procedure:", error);
    res.json({ error: "Internal Server Error" });
  }
};

// Route to handle /playerHeader
app.post("/playerHeader", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_player_details",
    "request received by teamSchedule server successfully"
  );
});

app.post("/playerStats", async (req, res) => {
  await handleProcedure(
    req,
    res,
    "get_player_stats_per_year",
    "request received by teamSchedule server successfully"
  );
});


module.exports = app;
