const AnnouncemenService = module.exports;
const AnnouncementRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncemenService.create = async (Announcemen) => {
  console.log('creating Announcement');

  const AnnouncemenToValidate = await AnnouncementRepository.find(Announcemen.id);
  console.log(AnnouncemenToValidate);
  if (AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return AnnouncementRepository.create(Announcemen);
};

AnnouncemenService.findforfilter = (idPrograma ,tipoPractica , idCiclo) => {
  console.log('find for filter Announcement');
  
  return AnnouncementRepository.findforfilter(idPrograma ,tipoPractica , idCiclo);
};
