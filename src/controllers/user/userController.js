const usersCollection = require("../../database/models/usersCollection");

const listUsers = async (req, res) => {
  const users = await usersCollection.find();
  return res.json({ message: "success", data: users });
};

const createUser = async (req, res) => {
  const { name, cpf, email, telefone } = req.body;

  const user = await usersCollection.create({
    name,
    cpf,
    email,
    telefone,
  });

  return res.json({ message: "success", data: user });
};

const updateUser = async (req, res) => {
  const { name, cpf, email, telefone } = req.body;

  const user = await usersCollection.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      cpf,
      email,
      telefone,
    },
    { new: true }
  );
  return res.json({ message: "success", data: user });
};

const deleteUser = async (req, res) => {
  try {
    const user = await usersCollection.findById(req.params.id);
    await user.remove();

    return res.json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "fail", error: "Erro ao deletar usuário" });
  }
};

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
};
