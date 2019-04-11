const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove,
  findById,
  getAll
};

function getAll() {
  return db("users");
}

async function insert(user) {
  const [id] = await db("users").insert(user);
  return db("hobbits")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where({ id })
    .first()
    .del();
}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
