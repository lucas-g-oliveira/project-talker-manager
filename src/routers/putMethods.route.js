const express = require('express');

const router = express.Router();

const utils = require('../utils/fsUtils');
const fx = require('../middlewares/validation');

router.use(fx.tokenValidator);
router.use(fx.nameValidator);
router.use(fx.talkValidator);
router.use(fx.watchedAtValidator);
router.use(fx.rateValidator);
router.use(fx.ageValidator);

router.put('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const editedTalker = await utils.editTalkerById(id, req.body);
  return res.status(200).json(editedTalker);
});

module.exports = router;