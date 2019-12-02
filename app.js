const express = require('express');

const app = express();

//  Use port 3000 if the environment doesn't specify one

const PORT = process.env.PORT || 3000;

//  home route
app.get('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'Hi there!'
  });
});

//  Listen to port
app.listen(PORT);
