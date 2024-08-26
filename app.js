// Import statements
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';

// Declare Constants
const app = express();
const port = 3000;
const API_URL = 'https://api.github.com'; // Base URL
const API_TOKEN = 'YOUR_GITHUB_API_TOKEN'; // Personal Github API Token

// API Configurations Setting
const config = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

app.use(express.static('public')); // Declare assets folder
app.use(bodyParser.urlencoded({ extended: true }));

// handle GET Requests
app.get('/', async (req, res) => {
  res.render('index.ejs');
});

// Handle POST Requests
app.post('/', async (req, res) => {
  const userName = req.body.search; // Get input data
  try {
    // Make a request at endpoint- https://api.github.com/users/<username>
    const result = await axios.get(`${API_URL}/users/${userName}`, config);
    // Get the required data from the API Response object
    const {
      name,
      login,
      html_url,
      avatar_url,
      bio,
      public_repos,
      followers,
      following,
    } = result.data;

    // Bind all the displayable data into a single object (content)
    // If the github users not have any name then get his/her github username (login)
    res.render('index.ejs', {
      content: {
        name: name || login,
        url: html_url,
        avatar: avatar_url,
        bio: bio,
        repos: public_repos,
        followers: followers,
        following: following,
      },
    });
  } catch (error) {
    console.log(JSON.stringify(error.response.data)); // Log the error

    // If github account not exists
    if (error.response.data.status == 404) {
      res.render('index.ejs', {
        error: `No user found with username: ${req.body.search}`,
      });
    } else {
      res.render('index.ejs', {
        error: 'Sorry! We facing some error to fetch the result.',
      });
    }
  }
});

// Start the express app on port 3000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
