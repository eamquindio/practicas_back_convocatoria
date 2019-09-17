const PersonAnnRepository = module.exports;
const DB = require('../utils/DB');

PersonAnnRepository.create = PersonAnnouncement => DB('estudiante_convocatoria').insert(PersonAnnouncement).returning('*');

PersonAnnRepository.find = id => DB('estudiante_convocatoria').select('*').where({ id }).first();

