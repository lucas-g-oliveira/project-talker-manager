const emailRegx = /\S+@\S+\.\S+/;
const watchedAtRegx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

const msgErrors = {
  age: 'A pessoa palestrante deve ser maior de idade',
  email: 'O "email" deve ter o formato "email@email.com"',
  password: 'O "password" deve ter pelo menos 6 caracteres',
  name: 'O "name" deve ter pelo menos 3 caracteres',
  rate: 'O campo "rate" deve ser um inteiro de 1 à 5',
  watchedAt: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  notFound: (key) => `O campo "${key}" é obrigatório`,
};

const validator = {
  age: (content) => content >= 18,
  email: (content) => emailRegx.test(content),
  password: (content) => content.length >= 6,
  name: (content) => content.length > 2,
  rate: (content) => content >= 1 && content <= 5,
  watchedAt: (content) => watchedAtRegx.test(content),
};

const genResFail = (res) => ({ status: 400, data: { message: msgErrors[res] } });
const keyNotFound = (key) => ({ status: 400, data: { message: msgErrors.notFound(key) } });
const ifHaveKey = (object, key) => Object.keys(object).includes(key);
const ifIsValueValid = (object, key) => validator[key](object[key]);

function keyAndValueValidator(object, key) {
  if (!ifHaveKey(object, key)) return keyNotFound(key);
  if (!ifIsValueValid(object, key)) return genResFail(key);
  return 'OK';
}

module.exports = keyAndValueValidator;