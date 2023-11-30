// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5555;

/**
 * CORS middleware configuration to handle cross-origin requests.
 * Allows requests from 'http://localhost:3000' and specifies allowed methods.
 */
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'POST',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());




app.post('/api/teams', async (req, res) => {
  console.log("Received by TeamsServer -- ");

  res.json("../../../../jsons/fromNBA/all_teams.json");
});
