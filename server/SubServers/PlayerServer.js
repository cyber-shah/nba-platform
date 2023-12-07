const express = require("express");
const app = express();
const path = require("path");

app.post("/playerHeader"),
  async (req, res) => {
    console.log("From PlayerServer: sending player header data");
    try {
      const filePath = path.join(
        __dirname,
        "./../../jsons/fromNBA/all_players.json"
      );
      res.sendFile(filePath);
    } catch (error) {
      console.error("Error sending JSON file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = app;