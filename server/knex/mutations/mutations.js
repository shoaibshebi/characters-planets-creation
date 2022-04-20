const knex = require("../../connect");
const { compressImg } = require("../../utils/utils");

async function createPlanet({ name, description, code, picture_url }) {
  let url = compressImg(picture_url);
  let res = null;
  //Execption throw if insertion failed
  try {
    res = await knex("planets")
      .insert({
        name: name,
        description: description,
        code: code,
        picture_url: url,
      })
      .returning("*");
    res = res[0];
  } catch (error) {
    console.log("error", error);
    return {
      name: error.detail,
    };
  }
  return {
    ...res,
    population: res.population || 0,
    characters: res.characters || [],
  };
}
async function createCharacter({ name, description, planet, picture_url }) {
  let url = compressImg(picture_url);
  let res = null;
  //Execption throw if insertion failed
  try {
    res = await knex("characters")
      .insert({
        name: name,
        description: description,
        planet: planet,
        picture_url: url,
      })
      .returning("*");
    res = res[0];
  } catch (error) {
    console.log("error", error);
    return {
      name: error.detail,
    };
  }
  return res;
}

module.exports = {
  createPlanet,
  createCharacter,
};
