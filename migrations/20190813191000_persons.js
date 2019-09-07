exports.up = knex =>
  knex.schema.createTable('persons', (table) => {
    table.string('id').primary();
    table.string('name');
  });

exports.down = knex => knex.schema.dropTable('persons');
