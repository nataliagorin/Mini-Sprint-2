# Hotels REST API

This project is an app built with **Node.js, Express, TypeScript, Sequelize and PostgreSQL**. I containarized it wiht Docker. The API allows to manage the hotels with public and private routes protected with JWT.


# Project structure
<pre>
<code>
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── .env
├── README.md
├── src/
│ ├── app.ts
│ ├── config/
│ │ └── database.ts
│ ├── controllers/
│ │ └── hotelController.ts
│ ├── middleware/
│ │ └── auth.ts
│ ├── models/
│ │ ├── Hotel.ts
│ │ ├── City.ts
│ │ └── Region.ts
│ ├── routes/
│ │ ├── hotelRoutes.ts
│ │ └── authRoutes.ts
├── sql/
│ └── hotels_db/
│ ├── hotels.csv
│ ├── cities.csv
│ ├── regions.csv
│ └── normalize_hotels_csv.py
</code>
</pre>

## PostgreSQL Setup: Table 
The initial data was provided in a single large CSV file containing all hotel information, including cities and regions details. 

I chose to normalize the table, meaning I split the data in multiple related table. 

I used a script to:

- extract unique regions and assign each a "PropertyStateProvinceID"
- extract unique cities and assign each a "CityID"
- replace the city and region columns in the hotels data with their coresponding IDs

After running the script i was left with 3 CSVs which I have imported into PostgreSQL hotels_db.

## Sequelize models
Models in Sequelize represents the structure of the db in the application code. 

Each model maps to a table in PostgreSQL and defines the table's columns, data types and relations through foreign keys. 

They are useful because:

- they let you interact with the database using JavaScript/TypeScript objects instead of raw SQL queries
- they inforce data types and constraints at the application level
- they define how tables are related (hotel belongs to a city and a region)

In conclusion these models act like a bridge between the TypeScript code and PostgreSQL tab;es. 

## Express App Setup, Routing and API Endpoints

The entrypoint of the application is *app.ts* where we import and config. Express, set up the middleware for parsing JSON bodies, register all API routes, start the server and connect to the PostgreSQL database. 

I implement the routes GET, POST, PUT, DELETE and also the route for authentication in order to handle the HTTP layer.

I implement endpoints as controllers to make it easier to handle what to do when a request comes in.

I split the routes intro public and protected. The public ones can be accessed by anyone, but the protected ones require a valid JWT token in the Authorization header.

If the token is missing or invalid when a request is made, the user can get 401 or 403 error code. 

## Postman testing
In Postman I create a few requests in order to test the routes implemented before. 

## Rest vs Nest

More about this in rest_nest.md





