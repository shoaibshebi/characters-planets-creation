/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  Promise.all([
    knex.schema.createTable("planets", (table) => {
      table.increments("p_id").notNullable().primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("code").notNullable();
      table.string("picture_url");
    }),
  ]);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("planets");
};
