const router = require('express').Router();

router.get('/', (request, response) => {
  response.send({
    on: new Date(),
    message: 'Hi there! 1'
  });
});

module.exports = router;
