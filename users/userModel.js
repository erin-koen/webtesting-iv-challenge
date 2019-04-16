const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove,
  findById,
  get
};

function get(id) {
  if (id)
    return db("users")
      .where({ id })
      .first();
  else return db("users");
}

function getAll() {
  return db("users");
}

async function insert(user) {
  const [id] = await db("users").insert(user);
  return get(id);
}

function remove(id) {
  return db("users")
    .where({ id })
    .first()
    .del();
}

// function getAll() {
//   return db("users");
// }

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
