exports.up = knex =>
  knex.schema.createTable('estudianteConvocatoria', (table) => {
    table.increments('id');
    table.integer('id_estudiante');
    table.integer('id_convocatoria');
  });

exports.down = knex => knex.schema.dropTable('estudianteConvocatoria');