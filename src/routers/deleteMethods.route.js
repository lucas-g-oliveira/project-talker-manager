const express = require('express');

const router = express.Router();

const fx = require('../middlewares/validation');

router.use(fx.tokenValidator);

router.delete('/talker/:id',
fx.tokenValidator,
fx.idValidator,
fx.deleteTalker,
async (req, res) => res.status(204).send('OK'));

module.exports = router;