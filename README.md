# Characters and Planets Creation application 🌎

<p align="center">
  <img src="/client/public/app-image1.png" alt="Logo">
</p>

#### Note related commits & docs: Emojies in commits and docs, make the dry-code world a bit joyfull

KEY: 📦 NEW, 👌 IMPROVE, 🐛 FIX, 📖 DOC, 🚀 RELEASE, ✅ DONE, and 🤖 TEST

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#context">Context</a></li>
      </ul>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#weaknesses">Weaknesses</a></li>
    <li><a href="#improvements">Improvements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Characters and Planets Creation application** is a full-stack web application written in Javascript; Frontend in React.js, Apollo-client, Mui and Backend in Node.js using Koa, Graphql, Postgres & Knex. Client dir (Frontend) is bootstraped with npx create-react-app. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Context

You just saw the Star Wars movies and you really liked them (even though there are some scenario choices you're not sure you approve). You've decided to join a Star Wars fan group to talk about your new interest and you've met them for the first time yesterday evening, it went really well. They are interested that you are a developer and would like you to develop something for the group.

Here is what they tell you:

"We currently have the project of imagining a new world where adventures can happen. We imagine the planets and characters of this world but it's difficult to keep track of what we have already done on paper. It would be nice to have an app to easily manage the content of our new world. 🚀 The idea is to be able to create and view the planets and the characters. What do you think? We all are developers too but we don't currently have the time to develop it. Would you be interested in developing it?"
Enthusiastic to help your new group of friends, you accept and here you go.

### Features

- web application in which you can create the planets
- you can create the character/characters that lives on the specific planet
- responsive design for all devices all most
- cross browser compatability for the UI
- apollo-client at client side for state managment updating cache realtime
- SQL database support using Postgreqs, manipulating with knex
- user authorization with a hardcoded authorizaiton token
- use of Docker, Docker Compose to run the code on any machine
- use of Knex for Postgres db manipulation & graphql for handling data requests from client side


### Built With

- [React](https://reactjs.org/)
- [Node](https://www.nodejs.org)
- [Postgres](https://www.nodejs.org)
- [Apollographql](https://www.apollographql.com/)

### Screenshots

- Home Page
  ![Planets page](/client/public/app-image1.png)

![Characters page](/client/public/app-image2.png)

You can run it in development mode: docker-compose up --build

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You'll need Docker and Docker Compose installed on your system.

### Installation

1. Clone the repository.

   ```sh
   git clone https://github.com/shoaibshebi/characters-planets-creation.git && cd characters-planets-creation
   ```

2. Build Docker containers locally:

  ```bash
  docker-compose up -d --build OR docker-compose up --build
  ```

3. Install knex globaly:

```bash
  docker-compose exec api npm i -g knex
  ```

3. Run migrations & seed:

```bash
docker-compose exec api knex migrate:up 20220415112937_create_planets.js
docker-compose exec api knex seed:run --specific=planets_seed.js
docker-compose exec api knex migrate:up 20220415113114_create_characters.js
docker-compose exec api knex seed:run --specific=characters_seed.js
```

## Usage

```bash
docker-compose up -d OR docker-compose up
```

Go to `http://localhost:4003/` to see the Frontend app.
Go to `http://localhost:3000/graphql` to see the gql playground.
🔴 Alert: Use this Authorization token if wanna test Api -> "Bearer eyJlbWFpbCI6InNob2FpYjQwMzA4OTFAZ21haWwuY29tIiwiaWQiOiI2MWQyYWI1ZjA0NjU4NTNmOTEzNGUyZWQiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY1MDAxNjA2NiwiZXhwIjoxNjgxNTUyMDY2fQ"

<!-- weaknesses -->

## What I didn't implement

 - Friends relations with each others (That was optional)

## Code Weaknesses

  - Backend: Didn't restricted db schema fields to some varchar limits
  - Backend: Didn't applied checks for table fields ranges, if you populate the DB
  - Frontend: Cache is not optimal due to again querying data to update cache

<!-- improvements -->

## Improvements

  - Repo name could be the Spacious 😅, anyway will be changed later.
  - Backend: Code can be refactored in queries and mutation files espacially before returing the reponse to resolvers
  - Backend: Schema tables fields can be restricted to some limits
  - Frontend: Cache can be optimized more, using Graphql fragments

