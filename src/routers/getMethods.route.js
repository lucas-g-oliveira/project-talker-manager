const express = require('express');
const { getAllTalkers } = require('../utils/fsUtils');
const fx = require('../middlewares/validation');

const router = express.Router();

router.get('/talker', async (_request, response) => {
  const data = await getAllTalkers();
  return response.status(200).json(data);
});

router.get('/talker/:id', fx.getMethodWithTokenValidator);

module.exports = router;