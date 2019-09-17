const PersonAnnouncementController= module.exports;

const PersonAnnouncementService = require('../services/PersonAnnouncementService');

PersonAnnouncementController.save = async (req, res, next) => {
  const { idConv } = req.params;
  const { body } = req;
  const PersonAnnouncement = {idAnnaouncement: idConv, codEst: body.codigo}; 
  
  try {
    console.log(PersonAnnouncement);
    await PersonAnnouncementService.create(PersonAnnouncement);

    return res.send("succes");
  } catch (error) {

    console.log({ error });

    return next(error);
  }
};
