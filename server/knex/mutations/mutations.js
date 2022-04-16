const knex = require("../../connect");

async function createPlanet({ name, description, code, picture_url }) {
  let res = await knex("planets")
    .insert({
      name: name,
      description: description,
      code: code,
      picture_url: picture_url,
    })
    .returning("*");
  res = res[0];
  return {
    ...res,
    population: res.population || 0,
    characters: res.characters || [],
  };
}
async function createCharacter({ name, description, planet, picture_url }) {
  let res = await knex("characters")
    .insert({
      name: name,
      description: description,
      planet: planet,
      picture_url: picture_url,
    })
    .returning("*");
  res = res[0];
  return res;
}

module.exports = {
  createPlanet,
  createCharacter,
};
