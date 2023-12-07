const express = require("express");
const app = express();
const path = require("path");

app.post("/teamSchedule", async (req, res) => {
    console.log("From TeamServer: request received by teamSchedule server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;
    res.send("From TeamServer: request received by teamSchedule server successfully ");
});


app.post("/teamRoster", async (req, res) => {
    console.log("From TeamServer: request received by teamRoster server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

    // TODO : Implement the logic here to get the data from the database
    try {
        const filePath = path.join(__dirname, "./../jsons/fromNBA/team_roster.json");
        res.sendFile(filePath);
    }
    catch (error) {
        console.error('Error sending JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post("/teamStats", async (req, res) => {
    console.log("From TeamServer: request received by teamStats server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

    res.send("From TeamServer: request received by teamStats server successfully ");
});


app.post("/teamDetails", async (req, res) => {
    console.log("From TeamServer: request received by teamDetails server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

    // TODO : Implement the logic here to get the data from the database
    try {
        const filePath = path.join(__dirname, "./../jsons/fromNBA/team_details.json");
        res.sendFile(filePath);
    } catch (error) {
        console.error('Error sending JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = app;