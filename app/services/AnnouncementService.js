const AnnouncementService = module.exports;
const AnnouncementRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncementService.create = async (Announcement) => {
  console.log('creating Announcement');

  const AnnouncemenToValidate = await this.find(Announcement.id);
  console.log(AnnouncemenToValidate);
  if (AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return AnnouncementRepository.create(Announcement);
};

AnnouncementService.find = (announcement) => {
  console.log('find Announcement');

  return AnnouncementRepository.find(announcement);
};

AnnouncementService.edit = (id, Announcement) => {
  console.log('edit announcement');

  return AnnouncementRepository.edit(id, Announcement);
};

AnnouncementService.findforfilter = (idPrograma, tipoPractica, idCiclo) => {
  console.log('find for filter Announcement');

  return AnnouncementRepository.findforfilter(idPrograma, tipoPractica, idCiclo);
};

AnnouncementService.editStatus = (id) => {
  console.log('edit status convocatoria');

  return AnnouncementRepository.editStatus(id, 'inactivo');
};

AnnouncementService.closedCalls = (idPrograma, Estado) => {
  console.log('find for filter closed calls');

  return AnnouncementRepository.closedCalls(idPrograma, Estado);
};

AnnouncementService.singUpAnnoucement = async (studentAnnouncement) => {
  console.log('creating studentAnnouncement');

  const AnnouncemenToValidate = await AnnouncementRepository.find(studentAnnouncement.id_convocatoria);
  console.log(AnnouncemenToValidate, studentAnnouncement);
  if (!AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement not exists', 409);

  return AnnouncementRepository.singUpAnnoucement(studentAnnouncement);
};

AnnouncementService.listAll = () => {
  console.log('find all annoucements');

  return AnnouncementRepository.listAll();
};
