require("dotenv").config(); // Captura variáveis setadas no arquivo .env

const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Setup do banco de dados
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors()); // Utilzação do cors para permissão de acesso à API, quando vazio qualquer IP pode se conectar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Acessando variável de ambiente setada pelo Heroku, pois no ambiente de deploy não é possível setar a porta
app.listen(process.env.PORT || 3000);
