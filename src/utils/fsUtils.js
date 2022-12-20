const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

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

async function getTalkerById(num) {
  const data = await getFile();
  const filtered = data.filter((e) => e.id === Number(num));
  if (filtered.length > 0) {
    return { status: 200, data: filtered[0] };
  }
  return { status: 404, data: { message: 'Pessoa palestrante não encontrada' } };
}

async function addNewTalker(talker) {
  const data = await getFile();
  const ids = data.map((e) => e.id);
  const newID = Math.max(...ids) + 1;
  const newTalker = { ...talker, id: newID };
  await replaceFile([...data, newTalker]);

  return { ...talker, id: newID };
}

async function editTalkerById(id, newData) {
  const data = await getFile();
  const delTalker = data.filter((e) => e.id !== id);
  const edited = { ...newData, id: Number(id) };
  await replaceFile([...delTalker, edited]);
  return edited;
}

module.exports = {
  getFile,
  replaceFile,
  getTalkerById,
  addNewTalker,
  editTalkerById,
};
