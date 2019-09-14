const PersonAnnouncementController= module.exports;
const PersonAnnouncementService = require('../services/PersonAnnouncementService');
const AnnouncementService = require('../services/AnnouncementService');

PersonAnnouncementController.save = async (req, res, next) => {
    const { id_conv } = req.params;
    const { body } = req;
    const PersonAnnouncement = (id_conv,body.codigo);

  try {
    await AnnouncementService.create(body);

    await PersonAnnouncementService.create(PersonAnnouncement);

    return res.send("succes");
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};