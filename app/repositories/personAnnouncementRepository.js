const personAnnouncementRepository = module.exports;
const DB = require('../utils/DB');

personAnnouncementRepository.create =
studenAnnouncement => DB('estudianteConvocatoria').insert(studenAnnouncement).returning('*');

personAnnouncementRepository.find = id => DB('estudianteConvocatoria').select('*').where({ id }).first();

personAnnouncementRepository.listAnnouncementStudent =
id => DB('estudianteConvocatoria').select('*').where({ id }).first();