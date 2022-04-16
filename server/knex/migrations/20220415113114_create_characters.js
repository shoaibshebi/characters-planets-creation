/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  Promise.all([
    knex.schema.createTable("characters", (table) => {
      table.increments("c_id").primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("picture_url");
      table
        .string("planet")
        .notNullable()
        .references("code")
        .inTable("planets");
    }),
  ]);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
