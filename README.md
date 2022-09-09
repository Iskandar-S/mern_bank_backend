# MERN Bank App - Backend
***
## About
This Full Stack MERN App is part of Per Scholas final project. This repo is for the backend part of the app. Check out frontend repo for this app [here](https://github.com/Iskandar-S/mern_bank_frontend).

## Technical Requirements

- A working full-stack application, built by learner, using the MERN stack: Node.js, MongoDB/Mongoose, Express and React.
- At least one model with full CRUD.
- Include at least one of the following features:
  - Pull from a third party API - either client side with AJAX or server-side with an NPM:
    - NPMs that work with an API: Twitter, Yelp, etc. Remember the axios module can make API calls server side to any URL.
  - Have two models:
    - Have two separate models that don't have to be related. 
  - Use a CSS framework like Skeleton or Bootstrap. 
- Be deployed online and accessible to the public via Heroku.
- Use React Router.
- A README.md file with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc.
  - Have a link to your hosted working app in theREADME.md file in your github repo.
  
 ***
 
 ## Routes

|        URL         | HTTP Verb | Action |  	       Notes               |
| ------------------ | --------- | ------ | ---------------------------- |
| /accounts/         | GET       | Index  | index of all accounts        |
| /accounts/:id      | DELETE    | Delete | close account                |
| /accounts/:id      | PUT       | Update | update account details       |
| /accounts/         | POST      | Create | open a new account           |
| /accounts/:id      | GET       | Show   | show individual account      |
| /transactions/     | GET       | Index  | index of all transactions    |
| /transactions/:id  | PUT       | Update | update transaction details   |
| /transactions/     | POST      | Create | create a new transaction     |
| /transactions/:id  | GET       | Show   | show individual transaction  |

***

### Prerequisites

Nothing. Just go [here](https://mern-bank-frontend.herokuapp.com/main).

## Backend Built With

- MongoDB
- Express
- Node


## Deployed in [Heroku](https://mern-bank-backend.herokuapp.com/api/accounts).
- Backend deployment is [here](https://mern-bank-frontend.herokuapp.com/main).

## Future Plans

This project is a work in progress. Currently I'm working on:
- Users Schema
- Signup and Login using Passport.js' Local strategy
