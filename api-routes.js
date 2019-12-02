const router = require('express').Router();

//  api end-points

//  Query parameters
//  Make sure the routes start with /
router.get('/', (request, response) => {
  const queryParameters = request.query;
  response.send({
    on: new Date(),
    message: 'GET successful',
    queryParameters
  });
});

//  Regex in route parameters
//  More information here: https://expressjs.com/en/guide/routing.html
//  More information on Http Status Codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
router.get('/:id([0-9]+)', (request, response) => {
  const id = +request.params.id;

  //  More information on status() is here: http://expressjs.com/en/5x/api.html#res.status

  if (id > 100) {
    response.status(400).send({
      on: new Date(),
      message: 'GET error',
      id
    });
  } else {
    if (id < 10) {
      //  Explicit status set using node API
      response.statusCode = 201; //  ok > creation status code
      response.send({
        on: new Date(),
        message: 'GET successful',
        id
      });
    } else {
      //  Unless response.statusCode = xxx is set explicitly, status 200 is default for response.send()
      response.send({
        on: new Date(),
        message: 'GET successful',
        id
      });
    }
  }
});

router.get('/:title(\\w+)', (request, response) => {
  const title = request.params.title;

  response.send({
    on: new Date(),
    message: 'GET successful',
    title
  });
});

router.post('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'POST successful',
    body: request.body
  });
});

router.put('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'PUT successful',
    body: request.body
  });
});

router.delete('/:id([0-9]+)', (request, response) => {
  const id = +request.params.id;
  response.send({
    on: new Date(),
    message: 'DELETE successful',
    id
  });
});

module.exports = router;
