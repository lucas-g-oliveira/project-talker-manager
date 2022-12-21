const ifExistsKey = require('../utils/ifHaveKeys');
const utils = require('../utils/fsUtils');

const CODE_401 = '401';
const CODE_400 = '400';
const resExpress = (res, code, msgErr) => res.status(code).json({ message: msgErr });

const resKeyNotFound = (res, key) => {
  const msg = `O campo "${key}" é obrigatório`;
  return resExpress(res, CODE_400, msg);
};

function emailValidator(req, res, next) {
  const emailRegx = /\S+@\S+\.\S+/;
  const msg = 'O "email" deve ter o formato "email@email.com"';
  if (!ifExistsKey('email', req.body)) return resKeyNotFound(res, 'email');
  if (!emailRegx.test(req.body.email)) return resExpress(res, CODE_400, msg);
  next();
}

function passwordValidator(req, res, next) {
  const msg = 'O "password" deve ter pelo menos 6 caracteres';
  if (!ifExistsKey('password', req.body)) return resKeyNotFound(res, 'password');
  if (req.body.password.length < 6) return resExpress(res, CODE_400, msg);
  next();
}

function tokenValidator(req, res, next) {
  const key = 'authorization';
  const msg = ['Token não encontrado', 'Token inválido'];
  const { authorization } = req.headers;
  if (!ifExistsKey(key, req.headers)) return resExpress(res, CODE_401, msg[0]);
  if ((typeof authorization) !== 'string') return resExpress(res, CODE_401, msg[1]);
  if (authorization.length !== 16) return resExpress(res, CODE_401, msg[1]);
  next();
}

function nameValidator(req, res, next) {
  const msg = 'O "name" deve ter pelo menos 3 caracteres';
  if (!ifExistsKey('name', req.body)) return resKeyNotFound(res, 'name');
  if (req.body.name.length < 3) return resExpress(res, CODE_400, msg);
  next();
}

function ageValidator(req, res, next) {
  const msg = 'A pessoa palestrante deve ser maior de idade';
  if (!ifExistsKey('age', req.body)) return resKeyNotFound(res, 'age');
  if (req.body.age < 18) return resExpress(res, CODE_400, msg);
  next();
}

function talkValidator(req, res, next) {
  if (!ifExistsKey('talk', req.body)) return resKeyNotFound(res, 'talk');
  next();
}

function watchedAtValidator(req, res, next) {
  const { talk } = req.body;
  const watchedAtRegx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const msg = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  if (!ifExistsKey('watchedAt', talk)) return resKeyNotFound(res, 'watchedAt');
  if (!watchedAtRegx.test(talk.watchedAt)) return resExpress(res, CODE_400, msg);
  next();
}

function rateValidator(req, res, next) {
  const objectReq = req.body.talk;
  const msg = 'O campo "rate" deve ser um inteiro de 1 à 5';
  if (!ifExistsKey('rate', objectReq)) return resKeyNotFound(res, 'rate');
  if (!Number.isInteger(objectReq.rate)) return resExpress(res, CODE_400, msg);
  if (!(objectReq.rate >= 1 && objectReq.rate <= 5)) return resExpress(res, CODE_400, msg);
  next();
}

async function deleteTalker(req, res, next) {
  const { id } = req.params;
  const info = await utils.deleteById(id);
  if (!info) return res.status(204).json({ message: 'Pessoa palestrante não encontrada' });
  next();
}

async function idValidator(req, res, next) {
  const { id } = req.params;
  const data = await utils.editTalkerById(Number(id));
  if (data.status === 404) return resExpress(res, 401, data.message);
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
  tokenValidator,
  deleteTalker,
  idValidator,
};

/* 
404 
      JSON: {
          "message": "Pessoa palestrante não encontrada"
      }
*/