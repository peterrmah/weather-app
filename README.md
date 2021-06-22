# Weather App

## Objectives

- To gain familiarity with the graphql-weather-api which is a simple graphql wrapper around the Open Weather Map API.
- To practice setting up and working with a production-ready React-Apollo project.

## Features

The web app currently supports three features:

- Fetches current weather temperature for a given city
- Locates the client's geolocation and fetches the current weather temperature for their city location
- Allows the user to select a random city in Canada to fetch weather temperature data for

## Tech Choices

- **Apollo Client:** Given the graphql-weather-api, the frontend must be a consumer of a graphql resource. Apollo Client was chosen solely out of familiarity with the library.

- **TypeScript:** Vanilla JavaScript is far too loosey-goosey and often leads to countless bugs discovered in production. In my experience, the nature of a type-safe language such as TypeScript identifies ~95% of bugs during development time rather than in production.

- **GraphQL Code Generator:** Isn't the point of GraphQL to create a typed schema? Yes, so why recreate all the types from scratch?

- **Figma:** Its always easier to sketch before implementing. [See my initial design sketch on Figma here](https://www.figma.com/file/wO4epNBa28k71OMaQURYHe/Peter-s-Weather-App)

## Getting Started

- **Step 0:** To run this project, the [graphql-weather-api](https://github.com/konstantinmuenster/graphql-weather-api) server must first be running locally at `http://localhost:4000`.

Note: Alternatively, the creator of the repo has deployed a public instance of the server. If using the publicly deployed instance, make sure to update `REACT_APP_SERVER_HOST` in `.env` appropriately to ensure this client app points to a valid server running the graphql-weather-api server.

### Option 1: Run Weather App Locally

- **Step 1:** Navigate to repo directory

  ```bash
  cd weather-app
  ```

- **Step 2:** Install project dependencies

  ```bash
  # Install dependencies using package-lock.json
  npm ci
  ```

- **Step 3:** Compile TypeScript project to optimized JavaScript bundle

  ```bash
  npm run build
  ```

- **Step 4:** Start production React app

  ```bash
  npm start
  ```

### Option 2: Run Weather App in container using Docker

TODO

- **Step 1:** Navigate to repo directory

  ```bash
  cd weather-app
  ```

- **Step 2:** Run docker compose stack

  ```bash
  # Note: make sure Docker daemon is running first
  docker compose up
  ```

## Resources

- [geoPlugin:](http://www.geoplugin.net/json.gp) a free API that returns a client's Geolocation in a single HTTP request.
