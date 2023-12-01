const express = require("express");
const app = express();


app.post("/teamSchedule", async (req, res) => {
    console.log("From TeamServer: request received by teamSchedule server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

});


app.post("/teamRoster", async (req, res) => {
    console.log("From TeamServer: request received by teamRoster server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

});


app.post("/teamStats", async (req, res) => {
    console.log("From TeamServer: request received by teamStats server successfully ");
    // get team id and season from request body
    const teamId = req.body.teamId;
    const season = req.body.season;

});

exports.default = app; // Export the router