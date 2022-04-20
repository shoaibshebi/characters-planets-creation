const knex = require("../../connect");
const { paginationData } = require("../../utils/utils");

//Planets
async function getPlanets({ pageSize, page }) {
  const { pagination, data } = await paginationData({
    pageSize,
    page,
    table: "planets",
  });

  //to get the specific character under the single planet object
  let characters = await knex.select("*").from("characters");
  let modifiedPlanets = data.map((planet) => {
    let specificChars = characters.filter(
      (char) => char.planet === planet.code && char
    );
    return {
      ...planet,
      population: specificChars.length || 0,
      characters: specificChars,
    };
  });

  return {
    pagination: pagination,
    nodes: modifiedPlanets,
  };
}
async function getPlanet({ code }) {
  let res = await knex.raw(
    `(select p.p_id, p.name, p.description, p.picture_url, c.name as c_name, c.c_id 
    from characters as c right outer join planets as p on
     c.planet = p.code where p.code = '${code}')`
  );

  let chars = res.rows.filter((char) => {
    return (
      char.c_id !== null && {
        c_id: char.c_id,
        name: char.c_name,
      }
    );
  });
  res = res.rows[0];

  return {
    p_id: res.p_id,
    name: res.name,
    description: res.description,
    picture_url: res.picture_url,
    population: chars.length || 0,
    characters: chars.length ? [...chars] : [],
  };
}

//Characters
async function getCharacters({ pageSize, page }) {
  const { pagination, data } = await paginationData({
    pageSize,
    page,
    table: "characters",
  });

  // to get the specific planet under the single character object
  let planets = await knex.select("*").from("planets");
  let modifiedCharacters = data.map((char) => {
    let specificPlanet = planets.filter(
      (planet) => planet.code === char.planet && planet
    );
    return {
      ...char,
      planet: specificPlanet[0],
    };
  });

  return {
    pagination: pagination,
    nodes: modifiedCharacters,
  };
}
async function getCharacter({ id }) {
  let res = await knex.raw(
    `(select c.c_id, c.name, c.description, c.picture_url, p.name as planet_name
    from characters as c left outer join planets as p on
     c.planet = p.code where c.c_id = '${id}')`
  );
  res = res.rows[0];

  return {
    c_id: res.c_id,
    name: res.name,
    description: res.description,
    picture_url: res.picture_url,
    planet: {
      name: res.planet_name,
    },
  };
}

module.exports = {
  //Planets
  getPlanets,
  getPlanet,

  //Characters
  getCharacters,
  getCharacter,
};
