function tokenGenerator(num) {
  let token = '';
  let chars = 'abcdefghijklmnopqrstwxyz';
  chars += chars.toUpperCase();
  chars += '0123456789';
  while (token.length < num) {
    token += chars[Math.trunc(Math.random() * chars.length)];
  }
  return token;
}

module.exports = tokenGenerator;