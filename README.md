# Install

## requirements

1) node.js 
2) mysql server
3) web browser

To run the project locally, perform the following steps:

## client side

1) cd to the frontend folder `cd frontend` (`cd ../frontend` if you're in the backend folder)
1) install the requirements: `npm install`
1) run the frontend process `npm run dev`
1) make sure to update the project

## Server side:

1) cd to the frontend folder `cd backend` (`cd ../backend` if you're in the frontend folder)
1) Install the node.js requirements: `npm install`
1) Log into your mysql instance and create a new database in your DB, preferrably with a new user limited to that DB
1) Create a `.env` file in the root of this folder with the information used in the previous steps:
```
MYSQL_HOST="<host>"
MYSQL_USER="<user>"
MYSQL_PASSWORD="<password>"
MYSQL_DATABASE="<database name>"

CLIENT_URL="<client URL (usually localhost or 127.0.0.1)>"
CLIENT_PORT=<port used by the client>
```
5) Update file `config/config.json` with the relevant information
```
"development": {
    "username": "<user>",
    "password": "<password>",
    "database": "<database name>",
    "host": "<host>,
    "dialect": "mysql"
  },  
```
6) run the following to create the Countries table and fill it with data:

```
npx sequelize db:migrate
npx sequelize db:seed:all
```
1) run the project: `node app.js`


## Browser

Open a browser to the path created in the frontend process (e.g. http://localhost:5173)