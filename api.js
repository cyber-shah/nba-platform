// api.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/players', (req, res) => {
  db.query('SELECT * FROM players', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Add more endpoints as needed for teams, games, etc.

module.exports = router;
