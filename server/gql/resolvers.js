const queries = require("../knex/queries/queries.js");
const mutations = require("../knex/mutations/mutations.js");
const { verifyToken } = require("../auth/auth.js");

const resolvers = {
  // Prototypes for GET
  Query: {
    //Planets
    planets: async (_, { page, pageSize }, ctx) => {
      await verifyToken(ctx.authToken);
      return await queries.getPlanets({ pageSize, page });
    },
    planet: async (_, code, ctx) => {
      await verifyToken(ctx.authToken);
      return await queries.getPlanet({ code });
    },

    //Characters
    characters: async (_, { page, pageSize }, ctx) => {
      await verifyToken(ctx.authToken);
      return await queries.getCharacters({ pageSize, page });
    },
    character: async (_, id, ctx) => {
      await verifyToken(ctx.authToken);
      return await queries.getCharacter({ id });
    },
  },
  Mutation: {
    //Planets
    createPlanet: async (
      _,
      { planetInfo: { name, description, code, picture_url } },
      ctx
    ) => {
      await verifyToken(ctx.authToken);
      try {
        const newPlanet = await mutations.createPlanet({
          name,
          description,
          code,
          picture_url,
        });
        return newPlanet;
      } catch (e) {
        console.log("err", e);
      }
    },

    // Characters
    createCharacter: async (
      _,
      { characterInfo: { name, description, planet, picture_url } },
      ctx
    ) => {
      await verifyToken(ctx.authToken);
      try {
        const newCharacter = await mutations.createCharacter({
          name,
          description,
          planet,
          picture_url,
        });
        return newCharacter;
      } catch (e) {
        console.log("err", e);
      }
    },
  },
};

module.exports = resolvers;
