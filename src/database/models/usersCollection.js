const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  telefone: Number,
});

module.exports = mongoose.model("usersCollection", UserSchema);
