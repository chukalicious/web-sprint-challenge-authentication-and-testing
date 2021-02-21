const db = require("../../data/dbConfig");

module.exports = {
  add,
  findBy,
};

function findById(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  //   return findById(id);
  return db("users").select("id", "username", "password").orderBy("id").first();
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}
