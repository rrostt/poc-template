# PoC template

A template for quickly start a PoC app with an API and React frontend.

The server serves as both API backend, and builds and serves the client frontend.

Includes
  - webpack 4
  - babel 7
  - react
  - express
  - styled-components
  - dotenv

## Usage

1. `npm install`
2. `npm run dev`. Will build and watch /src/ and serve built files as well as api endpoints.

You can now start messing about the code as if there is no tomorrow.

`npm test` or `npm test -- --watch` runs jest.

Dotenv is recommended for config values and is loaded in both frontend and backend. Create a .env-file and set those secret values you don't want in a git repo.

## Deploy

`npm start` will build the frontend once in production mode and start the server. You can also build a dockerimage using the included Dockerfile. Building the dockerimage does not build the frontend. Webpack is run when the server starts. This makes it easy pass configuration values as environment variables to be set on the client as well as the server. Webpack 4 is fast, and out of the box the client is built and ready within a second or two.
