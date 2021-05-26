# Backend da aplicação de teste para o processo seletivo (Qualicorp)

## Objetivos

O objetivo dessa API é possibilitar o CRUD de usuários para o processo seletivo. Para isso foi construída uma [aplicação visual](https://github.com/triangulodepascal/Qualicorp_TesteFullStack_Frontend) e integração com o banco de dados não-relacional MongoDB.

### Distribuição

A distribuição da API foi feita através do [Heroku](https://www.heroku.com/) e as requisições podem ser realizadas no endereço [https://qualicorp-teste-backend.herokuapp.com/](https://qualicorp-teste-Backend.herokuapp.com/).
Para fins de verificação da proposta, qualquer endereço IP está liberado para se conectar à API.

### Desenvolvimento

O desenvolvimento foi feito utilizando [NodeJs](https://nodejs.org/en/) em conjunto com o framework [Express](https://www.npmjs.com/package/express) e da ferramenta de modulagem para MongoDB [Mongoose](https://www.npmjs.com/package/mongoose).

### Banco de dados

Para modularização do banco de dados, utilizou-se da ferramenta cloud [MondoDBAtlas](https://www.mongodb.com/cloud/atlas), permitindo o acesso remoto e integração por nuvem.

### Rotas

Para realização do CRUD dforam disponibilizadas 4 rotas, sendo elas:

- (/users) - Listagem dos usuários através do método GET
- (/user) - Criação de usuários através do método POST, utilizando o body como JSON e enviando os seguintes campos

```json
{
  "name": "",
  "cpf": "",
  "email": "",
  "telefone": 0
}
```

- (/user/:id) - Edição de usuários através do método PUT, utilizando o mesmo body do método POST

* (/user/:id) - Remoção de usuários através do método DELETE, sem uso do body.

### Possíveis melhorias

- Implementação de validação dos métodos durante as fases de POST e PUT a fim de evitar problemas de persistência e apresentação por parte do frotend.
