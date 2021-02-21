const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
};

function findById(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function find() {
  return db("users");
}
