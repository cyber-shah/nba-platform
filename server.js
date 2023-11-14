const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); 

const app = express();
const port = 5555;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/echo', (req, res) => {
  const inputText = req.body.text;
  res.json({ result: inputText });
});


app.post('/api/query', (req, res) => {
  const inputQuery = req.body.text;
  try {
    const result = db.query(inputQuery);
    res.json(result);
  }
  catch (err) {
    console.error('Error executing database query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

