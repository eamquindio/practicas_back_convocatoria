const ConvocatoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const BASE_URL = `http://34.70.190.6:80/api/convocatoria/`;

ConvocatoryMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

ConvocatoryMSResource.listStudents =
() => HTTPClient.post('http://34.70.190.6/api/estudiantes/list', { });

ConvocatoryMSResource.sendNotification =
students => HTTPClient.post('http://34.70.190.6/api/notificaciones/send_mail', {
  subject: 'Convocatoria creada',
  to: 'students',
  message: 'Una nueva convocatoria ha sido creada'
});
