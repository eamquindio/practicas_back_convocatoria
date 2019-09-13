const AnnouncementController = module.exports;
const AnnouncementService = require('../services/AnnouncementService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AnnouncementController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await AnnouncementService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};


AnnouncementController.edit = async (req, res, next) => {
  try {
    const { params: { id }, body } = req;

    const announcement = await AnnouncementService.edit(id, body);

    if (!announcement) return next(new ErrorHandler.BaseError('announcement not exists', 404));

    return res.send(announcement);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
