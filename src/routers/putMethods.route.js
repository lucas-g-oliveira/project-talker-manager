const express = require('express');

const router = express.Router();

const utils = require('../utils/fsUtils');
const fx = require('../middlewares/validation');

router.put('/talker/:id',
fx.tokenValidator,
fx.nameValidator,
fx.talkValidator,
fx.watchedAtValidator,
fx.rateValidator,
fx.ageValidator,
async (req, res) => {
  const { id } = req.params;
  const editedTalker = await utils.editTalkerById(id, req.body);
  return res.status(200).json(editedTalker);
});

module.exports = router;