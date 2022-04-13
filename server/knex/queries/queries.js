const knex = require("../../connect");

function getPlanets() {
  return knex("planets").select("*")
}

module.exports = {
  getPlanets,
};
