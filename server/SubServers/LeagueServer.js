const express = require("express");
const app = express();
const path = require("path");


app.post("/seasonTeams", async (req, res) => {
  console.log("From LeagueServer: sending Teams");
  // TODO: Implement the logic here to get the data from the database
  try {
    const filePath = path.join(__dirname, "./../jsons/fromNBA/all_teams.json");
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/seasonStandings", async (req, res) => {
  console.log("From LeagueServer: sending season standings");
  // TODO: Implement the logic here to get the data from the database
  try {
    const filePath = path.join(__dirname, "./../jsons/fromNBA/league_standings.json");
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/seasonPlayers", async (req, res) => {
  console.log("From LeagueServer: sending player leaders data");
  // TODO: Implement the logic here to get the data from the database
  try {
    const filePath = path.join(__dirname, "./../jsons/fromNBA/leaders_players.json");
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error sending JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/seasonGames", async (req, res) => {
  console.log("From LeagueServer: sending season games data");
  // TODO: Implement the logic here to get the data from the database
  res.json({ message: "From LeagueServer: sending season games data" });
});



module.exports = app; // Export the router