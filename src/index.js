require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

// Database setup
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());    //Uso do módulo de segurança
app.use(routes); //Uso das rotas da aplicação

app.listen(process.env.PORT || 3000);
