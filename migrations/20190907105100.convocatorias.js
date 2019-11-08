exports.up = knex =>
  knex.schema.createTable('convocatorias', (table) => {
    table.increments('id');
    table.date('fecha_inicio');
    table.date('fecha_final');
    table.integer('id_empresa');
    table.string('tipo_practica');
    table.integer('id_razon');
    table.integer('id_facultad');
    table.integer('id_programa');
    table.integer('id_ciclo');
    table.string('estado');
    table.integer('numero_estudiantes');
    table.integer('id_coordinador');
  });

exports.down = knex => knex.schema.dropTable('convocatorias');

