# Developerverse

- [Developerverse](#developerverse)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Font-end](#front-end)
  - [Back-end](#back-end)
    - [Technologies Used](#technologies-used)
    - [Dependencies](#dependencies)

## Installation

Information and instructions on setting up a development environment can be found in the [wiki](https://github.com/SEI-39/developerverse/wiki/Development-Environment)

## Deployment

For information on Netlify deployment see the Wiki @ [Netlify](https://github.com/SEI-39/developerverse/wiki/Deployed-via-Netlify)

For Heroku deployment see the Wiki @ [Heroku](https://github.com/SEI-39/developerverse/wiki/Deploying-via-Heroku)

## Front-end

## Back-end

### Technologies Used

- [Python](https://www.python.org/)
- [Heroku](https://www.heroku.com/) - to host a deployed version of the API remote
- [PostgreSQL](https://www.postgresql.org/) - An open source SQL database

### Dependencies

- [Django](https://www.djangoproject.com/) - A high level Python Web Framework
- [Django Rest Framework](https://www.django-rest-framework.org/) - A Django extension for building APIs

### Authentication

In order to authenticate, you need to create an account or log in with an email and password on the route `users/create`

Once created, you will recieve a token as a response

Add that token to your request headers in this format:

| **Key** | **Value** |
| ------- | --------- |
| Authorization | 'token *your token here* |
