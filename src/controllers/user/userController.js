const usersCollection = require("../../database/models/usersCollection");

const listUsers = async (req, res) => {
  const users = await usersCollection.find();
  return res.json({ message: "success", data: { users } });
};

const createUser = async (req, res) => {
  const user = await usersCollection.create({
    name: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email,
    telefone: req.body.telefone,
  });

  return res.json({ message: "success", data: user });
};

const updateUser = async (req, res) => {
  return res.json({ message: "success", data: {} });
};

const deleteUser = async (req, res) => {
  const user = await usersCollection.findById(req.params.id);

  try {
    await user.remove();
    return res.json({ message: "User removed" });
  } catch (err) {
    return res.status(500).send({ message: "Error removing user" });
  }
};

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
};
