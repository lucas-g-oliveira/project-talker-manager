const express = require('express');
const { getAllTalkers, getTalkerById } = require('../getFunctions');

const router = express.Router();

router.get('/talker', async (_request, response) => {
  const data = await getAllTalkers();
  return response.status(200).json(data);
});

router.get('/talker/:id', async (request, response) => {
  const data = await getTalkerById(request.params.id);
  return response.status(data.status).json(data.data);
});

module.exports = router;