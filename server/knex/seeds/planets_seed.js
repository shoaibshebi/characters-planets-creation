const { planets } = require("../../data/dummy");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex("planets")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("planets").insert(planets);
    });
};
