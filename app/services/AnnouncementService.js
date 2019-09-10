const ConvocatoriaService = module.exports;
const ConvocatoriaRepository = require('../repositories/AnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

ConvocatoriaService.create = async (convocatoria) => {
  console.log('creating Announcement');

  const convocatoriaParaValidar = await ConvocatoriaRepository.find(convocatoria.id);
  console.log(convocatoriaParaValidar);
  if (convocatoriaParaValidar) throw ErrorHandler.BaseError('Announcement already exists', 409);

  return ConvocatoriaRepository.create(convocatoria);
};
