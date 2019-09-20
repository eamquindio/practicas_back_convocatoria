const personAnnouncementService = module.exports;
const personAnnouncementRepository = require('../repositories/personAnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

personAnnouncementService.create = async (Announcement) => {
  console.log('creating Announcement');

  const AnnouncemenToValidate = await personAnnouncementRepository.find(Announcement.id);
  console.log(AnnouncemenToValidate);
  if (AnnouncemenToValidate) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return personAnnouncementRepository.create(Announcement);
};

personAnnouncementService.listAnnouncementStudent = (id) => {
  console.log('find studen by announcement');

  return personAnnouncementRepository.listAnnouncementStudent(id);
};
