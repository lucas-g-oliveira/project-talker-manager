const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, './talker.json');

async function getFile() {
  try {
    const data = await fs.readFile(FILE_PATH);
    return JSON.parse(data);
  } catch (err) {
    return err.Error('Não foi possível ler/ encontrar o arquivo.');
  }
}

async function replaceFile(data) {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(data));
  } catch (err) {
    return err.Error('failed');
  }
  return 'ok';
}

module.exports = {
  getFile,
  replaceFile,
};
