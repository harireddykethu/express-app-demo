const router = require('express').Router();
const fs = require('fs');
const util = require('util');

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

module.exports = router;
