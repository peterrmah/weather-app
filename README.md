# Weather App

## Objectives

- To gain familiarity with the graphql-weather-api which is a simple graphql wrapper around the Open Weather Map API.
- To practice setting up and working with a production-ready React-Apollo project.

## Features

The web app currently only supports a single feature - to fetch, display, and refresh weather info for a particular location.

## Tech Choices

- **Apollo Client:** Given the graphql-weather-api, the frontend must be a consumer of a graphql resource. Apollo Client was chosen solely out of familiarity with the library.

- **TypeScript:** Vanilla JavaScript is far too loosey-goosey and often leads to countless bugs discovered in production. In my experience, the nature of a type-safe language such as TypeScript identifies ~95% of bugs during development time rather than in production.

## Getting Started

- **Step 0:** To run this project, the [graphql-weather-api](https://github.com/konstantinmuenster/graphql-weather-api) server must first be running locally at `http://localhost:4000`.

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

- **Step 3:** Compile TypeScript project to JavaScript

  ```bash
  npm run build
  ```

- **Step 4:** Start React app

  ```bash
  npm run start
  ```

### Option 2: Run Weather App in container using Docker

TODO
