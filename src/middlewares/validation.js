const validator = require('../utils/centerValidation');

function nameValidator(req, res, next) {
  const result = validator(req.body, 'name');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function talkValidator(req, res, next) {
  const result = validator(req.body, 'talk');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function ageValidator(req, res, next) {
  const result = validator(req.body, 'age');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function watchedAtValidator(req, res, next) {
  const result = validator(req.body, 'watchedAt');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function rateValidator(req, res, next) {
  const result = validator(req.body, 'rate');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function emailValidator(req, res, next) {
  const result = validator(req.body, 'email');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

function passwordValidator(req, res, next) {
  const result = validator(req.body, 'password');
  if (result !== 'OK') return res.status(result.status).json(result.data);
  next();
}

module.exports = {
  nameValidator,
  talkValidator,
  watchedAtValidator,
  ageValidator,
  emailValidator,
  passwordValidator,
  rateValidator,
};

/* 
"name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
*/ 