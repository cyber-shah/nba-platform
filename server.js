const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); 
const app = express();
const port = 5555;
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'POST',
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/api/echo', (req, res) => {
  const inputText = req.body.text;
  res.json({ result: inputText });
});


app.post('/api/query', async (req, res) => {
  const inputQuery = req.body.text;
  console.log("Received by Server -- " + inputQuery);

  try {
    const result = await db.executeQuery(inputQuery);
    res.json({ result });
  } catch (err) {
    console.error('Error executing database query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

