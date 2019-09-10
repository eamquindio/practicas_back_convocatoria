const ConvocatoriaRepository = module.exports;
const DB = require('../utils/DB');

ConvocatoriaRepository.create = convocatoria => DB('convocatorias').insert(convocatoria).returning('*');

ConvocatoriaRepository.find = id => DB('convocatorias').select('*').where({ id }).first();
