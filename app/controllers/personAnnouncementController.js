const personAnnouncementController = module.exports;
const personAnnouncementService = require('../services/personAnnouncementService');

const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

personAnnouncementController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await personAnnouncementService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

personAnnouncementController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const person = await personAnnouncementService.find(id);

    if (!person) return next(new ErrorHandler.BaseError('person not exists', 404));

    return res.send(person);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

personAnnouncementController.listAnnouncementStudent = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    console.log({ id });
    const announcement = await personAnnouncementService.listAnnouncementStudent(id);
    if (announcement.length === 0) return res.status(204).send(announcement);

    return res.send(announcement);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
