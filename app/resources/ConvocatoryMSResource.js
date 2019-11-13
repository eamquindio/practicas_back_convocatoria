const ConvocatoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

const BASE_URL = `${MICROSERVICE_URL}/api/convocatoria/`;

ConvocatoryMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

ConvocatoryMSResource.listStudents =
() => HTTPClient.post('http://34.70.190.6/api/estudiantes/list', { })

ConvocatoryMSResource.sendNotification =
students => HTTPClient.post('http://34.70.190.6/api/notificaciones/send_mail', {
  "subject": "Convocatoria creada",
  "to": students,
  "message": "Una nueva convocatoria ha sido creada"
})

ConvocatoryMSResource.modifyAnnouncement =
announcement => HTTPClient.put(`${BASE_URL} /convocatorias/ `, announcement);

ConvocatoryMSResource.listAnnouncement =
listannouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `, listannouncement);

ConvocatoryMSResource.signUp =
(signUpAnnoucement) => {
  return HTTPClient.post(`${BASE_URL}/convocatorias/inscibirse/`, signUpAnnoucement);
};

ConvocatoryMSResource.singUp =
signUpAnnoucement => HTTPClient.post(`${BASE_URL}"/convocatorias/inscibirse/"`, signUpAnnoucement);
ConvocatoryMSResource.listAnnouncement =
listannouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `, listannouncement);

ConvocatoryMSResource.singUp =
signUpAnnoucement => HTTPClient.post(`${BASE_URL}/convocatorias/inscibirse/`, signUpAnnoucement);

ConvocatoryMSResource.modifyAnnouncement =
announcement => HTTPClient.put(`${BASE_URL} /convocatorias/ `, announcement);
ConvocatoryMSResource.registerAnnouncement = (announcement) => {

  return HTTPClient.post(BASE_URL+"/convocatorias/", announcement);
};

ConvocatoryMSResource.ClosingAnnouncement = ClosingAnnouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `,ClosingAnnouncement);
