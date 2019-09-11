const AnnouncementController = module.exports;
const AnnouncementService = require('../services/AnnouncementService');

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
