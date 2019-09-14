const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = convocatoria => DB('convocatorias').insert(convocatoria).returning('*');

AnnouncementRepository.find = id => DB('convocatorias').select('*').where({ id }).first();

AnnouncementRepository.findforfilter = (idPrograma, tipoPractica, idCiclo) =>
  DB('convocatorias').select('*').where({ id_programa: idPrograma }).orWhere({ tipo_practica: tipoPractica })
    .orWhere({ id_ciclo: idCiclo });
