const PersonService = module.exports;
const PersonAnnouncementRepository = require('../repositories/PersonAnnouncementRepository');
const AnnouncementRepository = require('../repositories/AnnouncementRepository');

const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PersonService.create = async (personAnnouncement) => {
  console.log('creating personAnnouncement');

  const announcementToValidate = await AnnouncementRepository.find(personAnnouncement.idAnnaouncement);

  if(!announcementToValidate ) throw ErrorHandler.BaseError('Announcement does not exist', 409); 
  
  return PersonAnnouncementRepository.create(personAnnouncement);
};
