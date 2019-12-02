const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api-routes');
const homeRouter = require('./home-routes');

const app = express();

//  Add body-parser middleware
//  More information here: https://expressjs.com/en/resources/middleware/body-parser.html
//  And here: https://www.npmjs.com/package/body-parser
app.use(bodyParser.json());

//  Add static resource serving middleware
//  nodejs.png is now available at http://localhost:3000/nodejs.png
//  Do not add public in the url
//  More information here: http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express
app.use(express.static('./public'));

//  Make sure the routes are unique. In case of multiple matching routes, first route match wins.
//  Adding home routing as middleware
app.use('/', homeRouter);

//  Adding API routing as middleware
app.use('/api/items', apiRouter);

//  Use port 3000 if the environment doesn't specify one

const PORT = process.env.PORT || 3000;

//  home route

//  Listen to port
app.listen(PORT);
