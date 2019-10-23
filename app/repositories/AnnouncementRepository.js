const AnnouncementRepository = module.exports;
const DB = require('../utils/DB');

AnnouncementRepository.create = Announcement => DB('convocatorias').insert(Announcement).returning('*');

AnnouncementRepository.find = id => DB('convocatorias').select('*').where({ id }).first();

AnnouncementRepository.findforfilter = (idPrograma, tipoPractica, idCiclo) =>
  DB('convocatorias').select('*').where({ id_programa: idPrograma }).orWhere({ tipo_practica: tipoPractica })
    .orWhere({ id_ciclo: idCiclo });

AnnouncementRepository.editStatus = (id, estado) => DB('convocatorias').update({ estado }).where({ id }).returning('*');

AnnouncementRepository.edit =
(id, Announcement) => DB('convocatorias').update(Announcement).where({ id }).returning('*');

AnnouncementRepository.closedCalls =
(idPrograma, Estado) => DB('convocatorias').select('*').where({ id_programa: idPrograma, estado: Estado });

AnnouncementRepository.singUpAnnoucement =
studentAnnouncement => DB('estudianteConvocatoria').insert(studentAnnouncement).returning('*');
