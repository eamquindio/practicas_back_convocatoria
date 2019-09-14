const AnnouncemenService = module.exports;
const AnnouncementRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncemenService.create = async (Announcemen) => {
  console.log('creating Announcement');
  
  const AnnouncementToValidate = await AnnouncementRepository.find(Announcemen.id);
  console.log( AnnouncementToValidate);
   
  
  if (AnnouncementToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return AnnouncementRepository.create(Announcemen);
};
