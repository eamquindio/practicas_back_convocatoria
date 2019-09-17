exports.up = knex =>
  knex.schema.createTable('estudiante_convocatoria', (table) => {
    table.increments('id');
    table.integer('estudiante_id');
    table.string('Convocatoria_Codigo');
  });

exports.down = knex => knex.schema.dropTable('estudiante_convocatoria');

