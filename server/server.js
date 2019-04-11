const express = require("express");
const helmet = require("helmet");
const Users = require("../users/userModel.js");
const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  const theUsers = await Users.getAll();
  res.status(200).json(theUsers);
});

server.post("/", async (req, res) => {
    const newUser = await Users.insert(req.body)
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
});

module.exports = server;
