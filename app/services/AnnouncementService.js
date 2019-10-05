const AnnouncementService = module.exports;
const AnnouncementRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncementService.create = async (Announcement) => {
  console.log('creating Announcement');

  const AnnouncemenToValidate = await AnnouncementRepository.find(Announcement.id);
  console.log(AnnouncemenToValidate);
  if (AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return AnnouncementRepository.create(Announcement);
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
