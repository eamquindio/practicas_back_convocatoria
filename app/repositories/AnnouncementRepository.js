const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = convocatoria => DB('convocatorias').insert(convocatoria).returning('*');

AnnouncementRepository.create = PersonAnnouncement => DB('estudiante_convocatoria').insert(PersonAnnouncement).returning('*');

