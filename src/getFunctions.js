const { getFile } = require('./utils/fsUtils');

async function getTalkerById(num) {
  const data = await getFile();
  const filtered = data.filter((e) => e.id === Number(num));
  if (filtered.length > 0) {
    return { status: 200, data: filtered[0] };
  }
  return { status: 404, data: { message: 'Pessoa palestrante não encontrada' } };
}

async function getAllTalkers() {
  const data = await getFile();
  return data;
}

module.exports = {
  getTalkerById,
  getAllTalkers,
};