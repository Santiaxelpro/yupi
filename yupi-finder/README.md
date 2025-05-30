# Yupi Finder

Yupi Finder is a simple web application that allows users to search for player information by name. The application communicates with an external API to retrieve data and display it on the web page.

## Features

- Input field for entering a player's name.
- Fetches player data from the API.
- Displays the player's information in a user-friendly format.

## Project Structure

```
yupi-finder
├── public
│   └── index.html       # HTML structure of the web page
├── src
│   ├── App.js           # Main JavaScript file for handling user input and API requests
│   └── api.js           # API communication functions
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with Yupi Finder, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/yupi-finder.git
   ```

2. Navigate to the project directory:
   ```
   cd yupi-finder
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## API Endpoint

The application communicates with the following API endpoint to fetch player data:
```
https://lapaginaweb.vercel.app/api/mc/${jugador}
```

Replace `${jugador}` with the player's name you want to search for.

## License

This project is licensed under the MIT License. See the LICENSE file for details.