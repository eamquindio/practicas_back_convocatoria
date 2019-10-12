exports.up = knex =>
  knex.schema.createTable('closingReason', (table) => {
    table.string('id').primary();
    table.string('description');
  });

exports.down = knex => knex.schema.dropTable('closingReason');
