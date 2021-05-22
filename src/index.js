const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());    //Uso do módulo de segurança
app.use(routes); //Uso das rotas da aplicação

app.listen(3000);
