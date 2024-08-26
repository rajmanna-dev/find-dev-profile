# Github Profile Finder

A Node.js/Express application that allows users to find GitHub profiles by leveraging the GitHub OAuth API. This project is a capstone assignment from the Web Development Bootcamp by Angela Yu, focusing on the topic "Using a public API."

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Usage](#api-usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This application allows users to search for GitHub profiles by entering a username. It fetches the relevant profile data from the GitHub API and displays key information such as the user's repositories, followers, and other public information.

## Features

- Search Github profiles by username.
- Display user details such as name, bio, avatar, no. of followers, no. of following, no. of public repos.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **GitHub API**: Fetch user data.
- **EJS**: Templating engine for rendering HTML.
- **Pure CSS**: Styling the frontend.

## Installation

1. Clone this repository:

   ```base
    git clone https://github.com/your-username/github-profile-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-profile-finder
   ```

3. Install the dependencies:

   ```bash
   npm i
   ```

4. Add your GitHub API token:

   ```env
   GITHUB_TOKEN=your_github_token_here
   ```

5. Start the application:

   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a GitHub username in the search bar and click "Search".
3. View the profile details fetched from the GitHub API.

## API Usage

This app uses the GitHub REST API v3. For more details on the API, visit the [GitHub API documentation](https://docs.github.com/en/rest?apiVersion=2022-11-28).

## Future Enhancements

- Include additional profile details such as top repos.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
