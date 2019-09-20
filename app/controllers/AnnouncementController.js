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

AnnouncementController.editStatus = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    console.log({ id });
    const convocatoria = await AnnouncementService.editStatus(id);

    if (!convocatoria) return next(new ErrorHandler.BaseError('convocatoria not exists', 404));

    return res.send(convocatoria);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

AnnouncementController.closedCalls = async (req, res, next) => {
  try {
    const { query: { idPrograma, Estado } } = req;
    const AnnouncementS = await AnnouncementService.closedCalls(idPrograma, Estado);
    if (AnnouncementS.length === 0) return res.status(204).send(AnnouncementS);

    return res.send(AnnouncementS);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
