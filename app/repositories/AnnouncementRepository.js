const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = convocatoria => DB('convocatorias').insert(convocatoria).returning('*');

AnnouncementRepository.find = id => DB('convocatorias').select('*').where({ id }).first();

AnnouncementRepository.findforfilter = (id_programa,tipo_practica,id_ciclo) => DB('convocatorias').select('*').where({ id_programa }).orWhere({ tipo_practica }).orWhere({ id_ciclo });