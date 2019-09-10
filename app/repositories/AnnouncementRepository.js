const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = convocatoria => DB('convocatorias').insert(convocatoria).returning('*');

AnnouncementRepository.find = id => DB('convocatorias').select('*').where({ id }).first();
