const PersonAnnounRepository = module.exports;
const DB = require('../utils/DB');

PersonAnnounRepository.create = PersonAnnouncement => DB('estudiante_convocatoria').insert(PersonAnnouncement).returning('*');

PersonAnnounRepository.find = id => DB('estudiante_convocatoria').select('*').where({ id }).first();

