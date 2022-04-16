const { characters } = require("../../data/dummy");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("characters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("characters").insert(characters);
    });
};
