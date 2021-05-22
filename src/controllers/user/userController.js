const listUsers = async (req, res) => {
  return res.json({ message: "Tá dando certo Aninha, te amuu", data: {} });
};

const createUser = async (req, res) => {
  return res.json({ message: "usuário adicionado", data: {} });
};

const updateUser = async (req, res) => {
  return res.json({ message: "usuário atualizado", data: {} });
};

const deleteUser = async (req, res) => {
  return res.json({ message: "usuário deletado", data: {} });
};

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
};
