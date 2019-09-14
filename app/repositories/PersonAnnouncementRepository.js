const PersonAnnouncementRepository = module.exports;
const DB = require('../utils/DB');

PersonAnnouncementRepository.create = PersonAnnouncement => DB('estudiante_convocatoria').insert(PersonAnnouncement).returning('*');

PersonAnnouncementRepository.find = id => DB('estudiante_convocatoria').select('*').where({ id }).first();

