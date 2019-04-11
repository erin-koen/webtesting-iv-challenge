const express = require("express");
const helmet = require("helmet");
const Users = require("../users/userModel.js");
const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  const theUsers = await Users.get();
  res.status(200).json(theUsers);
});

server.post("/", async (req, res) => {
  const newUser = await Users.insert(req.body);
  console.log(newUser);
  return res.status(201).json(newUser);
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.delete(id).then(res => {
    res.status(204).send(`The user with id number ${id} has been deleted.`);
  });
});

module.exports = server;
