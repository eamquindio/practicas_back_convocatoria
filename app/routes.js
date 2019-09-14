const express = require('express');
const PersonController = require('./controllers/PersonController');
const AnnouncementController = require('./controllers/AnnouncementController');
const PersonAnnouncementController = require('./controllers/PersonAnnouncementController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

// Announcement Routes
router.post('/convocatorias', AnnouncementController.save);
router.post('/convocatorias/:id_conv(\\d+)/inscripcion', PersonAnnouncementController.save);
router.get('/Convocatorias/list', AnnouncementController.findforfilter);
router.put('/convocatorias/cerrar/:id(\\d+)', AnnouncementController.editStatus);

module.exports = router;
