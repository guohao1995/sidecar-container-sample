// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

const endpoint = process.env.BACKEND_URL
//const endpoint = 'http://localhost:8000'; //process.env.BACKEND_URL||

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to display the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to handle the form submission
app.post('/submit', async (req, res) => {
  try {

      const response = await axios.get(`${endpoint}/id/${req.body.username}`);
      const imageSrc = 'images/'+response.data["image"];
      res.send(`
        <h1>Search Result</h1>
        <button onclick="location.href='/'">Back to Home Page</button>
        <p>Pet Information: ${endpoint}</p>
        <p>Id: ${response.data["id"]}, </p>
        <p>Type: ${response.data["type"]}, </p>
        <p>Color: ${response.data["color"]}, </p>
        <p><img src=${imageSrc} /> </p>
      `);

  } catch (error) {
    //console.log("here", error)
    res.send('Failed to submit form data to the PET API.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});