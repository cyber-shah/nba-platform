const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5555;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/echo', (req, res) => {
  const inputText = req.body.text;
  res.json({ result: inputText });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

