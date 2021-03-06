const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();
  await db('convocatorias').del();
  await db('estudianteConvocatoria').del();
  await db('closingReason').del();
};
