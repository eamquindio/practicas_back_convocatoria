const AnnouncemenService = module.exports;
const AnnouncementRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncemenService.create = async  => {
  console.log('creating Announcement');
  
  const announcemenId = Announcemen.id;
 
  
  if (AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return AnnouncementRepository.create(Announcemen);
};
