const express = require("express");
const app = express();
const path = require("path");

app.post("/create/:crudType", async (req, res) => {
    console.log("From CrudServer: sending create form");
    try {
        const crudType = req.params.crudType;
        console.log(crudType);
        const form = ["create", "create", "create", "create"];
        res.json(form);
    }
    catch (error) {
        console.error('Error sending JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/update/:crudType", async (req, res) => { 
    console.log("From CrudServer: sending update form");
    try {
        const crudType = req.params.crudType;
        console.log(crudType);
        const form = ["update", "update", "update", "update"];
        res.json(form);
    }
    catch (error) {
        console.error('Error sending JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/delete/:crudType", async (req, res) => {
    console.log("From CrudServer: sending delete form");
    try {
        const crudType = req.params.crudType;
        console.log(crudType);
        const form = ["delete", "delete", "delete", "delete"];
        res.json(form);
    }
    catch (error) {
        console.error('Error sending JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
} );



module.exports = app; // Export the router