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

AnnouncementController.findforfilter = async (req, res, next) => {
  try {
    const { query: { idPrograma, tipoPractica, idCiclo } } = req;
    const AnnouncementS = await AnnouncementService.findforfilter(idPrograma, tipoPractica, idCiclo);
    if (AnnouncementS.length === 0) return res.status(204).send(AnnouncementS);

    return res.send(AnnouncementS);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
