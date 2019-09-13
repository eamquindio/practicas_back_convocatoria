const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = Announcement => DB('convocatorias').insert(Announcement).returning('*');

AnnouncementRepository.find = id => DB('convocatorias').select('*').where({ id }).first();

AnnouncementRepository.edit =
(id, Announcement) => DB('convocatorias').update(Announcement).where({ id }).returning('*');
