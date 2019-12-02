const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const https = require('https');
const axios = require('axios').default;

router.get('/', async (request, response) => {
  const promise = util.promisify(fs.readFile);
  const fileContents = await promise('index.html', { encoding: 'UTF8' });
  response.send(fileContents);
});

router.get('/home', (request, response) => {
  // More information here: http://expressjs.com/en/5x/api.html#res.sendFile
  //  root is required
  response.sendFile('./index.html', {
    root: '.'
  });
});

router.get('/todo', async (request, response) => {
  let result;
  try {
    //  More information about Axios here: https://www.npmjs.com/package/axios
    //  And here: https://github.com/axios/axios
    result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    response.send({
      on: new Date(),
      message: 'Request successful',
      result: result.data
    });
  } catch (error) {
    console.log('ERROR', error);
    response.status(500).send({
      on: new Date(),
      message: 'Server error'
    });
  }
});

module.exports = router;
