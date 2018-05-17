# MEAN App Template

This is a very basic and barebones template to start off a MEAN (MongoDB, Express, Angular and Node) Application.

This particular example is a simple bookmarker for websites, where you can add, modify and delete websites.

## Steps

1. Clone or download this repo
2. Install all the required npm packages:
````
npm install
````
3. If needed, modify the config/config.js file to link to where your instance of MongoDB is. This example assumes the mongod process is running in the local machine, but it can use a MongoDB server on the web.
4. Run the Node application:
````
node server.js
````
If you have nodemon, you can use it instead monitor files for changes and automatically restart the server, using:
````
nodemon server.js
````

## Installed dependencies

- Express
- Mongoose
- Morgan
- BodyParser
- MethodOverride