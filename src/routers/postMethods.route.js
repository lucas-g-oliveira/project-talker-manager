const router = require('express').Router();
const tokenGenerator = require('../utils/tokenGenerator');
const {
  emailValidator,
  passwordValidator,
  ageValidator,
  nameValidator,
  rateValidator,
  talkValidator,
  watchedAtValidator,
} = require('../middlewares/validation');

router.post('/login', emailValidator, passwordValidator, (req, res) => {
  const data = tokenGenerator(16);
  return res.status(200).json({ token: data });
});

router.use(ageValidator);
router.use(nameValidator);
router.use(rateValidator);
router.use(talkValidator);
router.use(watchedAtValidator);

router.post('/talket', (req, res) => res.status(201).json(req.body));
module.exports = router;