const express = require('express');
const bodyParser = require('body-parser');

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

//  Use port 3000 if the environment doesn't specify one

const PORT = process.env.PORT || 3000;

//  home route
app.get('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'Hi there!'
  });
});

//  api end-points

//  Query parameters
app.get('/api/items', (request, response) => {
  const queryParameters = request.query;
  response.send({
    on: new Date(),
    message: 'GET successful',
    queryParameters
  });
});

//  Regex in route parameters
//  More information here: https://expressjs.com/en/guide/routing.html
app.get('/api/items/:id([0-9]+)', (request, response) => {
  const id = +request.params.id;

  response.send({
    on: new Date(),
    message: 'GET successful',
    id
  });
});

app.get('/api/items/:title(\\w+)', (request, response) => {
  const title = request.params.title;

  response.send({
    on: new Date(),
    message: 'GET successful',
    title
  });
});

app.post('/api/items', (request, response) => {
  response.send({
    on: new Date(),
    message: 'POST successful',
    body: request.body
  });
});

app.put('/api/items', (request, response) => {
  response.send({
    on: new Date(),
    message: 'PUT successful',
    body: request.body
  });
});

app.delete('/api/items/:id([0-9]+)', (request, response) => {
  const id = +request.params.id;
  response.send({
    on: new Date(),
    message: 'DELETE successful',
    id
  });
});

//  Listen to port
app.listen(PORT);
