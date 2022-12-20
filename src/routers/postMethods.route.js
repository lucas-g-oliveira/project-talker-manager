const express = require('express');

const router = express.Router();

const tokenGenerator = require('../utils/tokenGenerator');
const utils = require('../utils/fsUtils');
const fx = require('../middlewares/validation');

router.post('/login', fx.emailValidator, fx.passwordValidator, (req, res) => {
  const data = tokenGenerator(16);
  return res.status(200).json({ token: data });
});

router.use(fx.tokenValidator);
router.use(fx.nameValidator);
router.use(fx.talkValidator);
router.use(fx.watchedAtValidator);
router.use(fx.rateValidator);
router.use(fx.ageValidator);

router.post('/talker', async (req, res) => {
  const newTalker = await utils.addNewTalker(req.body);
  return res.status(201).json(newTalker);
});

module.exports = router;