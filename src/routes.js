const routes = require("express").Router(); //Desacoplando o módulo de rotas do express

const userController = require("./controllers/user/userController");

routes.get("/users", userController.listUsers);

routes.post("/user", userController.createUser);

routes.put("/user/:id", userController.updateUser);

routes.delete("/user/:id", userController.deleteUser);

module.exports = routes;
