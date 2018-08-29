# Ironhack | Beers api

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

## Instructions

* Fork this repo
* Clone this repo
* install dependencies with: `yarn | npm install`
* run : `mongoimport --db beers-api --collection beers --file ./beers.json --jsonArray` at the root folder.
* run `yarn | npm run dev`

## Endpoints

| Method | Endpoint | Response (200)     | Action |
| ------ | -------- | ------------------ | ------ |
| GET    | /all     | Beers[]            | Get all the beers from the DB |
| GET    | /single/:id | { Beer }        | Get the specific beer      |
| GET    | /random     | { Beer }        | Get a random beer from the DB |
| POST   | /new        | { Message: OK } | Create a new beer (The fields are specify on the instructions)|
| GET    | /search?q=`{query}` | Beers[10] | Search with a RegEx using the `query` specified and return the first ten result |