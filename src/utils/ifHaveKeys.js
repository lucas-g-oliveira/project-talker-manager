module.exports = function ifHaveKey(key, object) {
  return Object.keys(object).includes(key);
};