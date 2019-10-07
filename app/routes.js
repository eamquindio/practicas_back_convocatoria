const express = require('express');
const PersonController = require('./controllers/PersonController');
const AnnouncementController = require('./controllers/AnnouncementController');
const personAnnouncementController = require('./controllers/personAnnouncementController');
const ClosingReasonController = require('./controllers/ClosingReasonController');

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

router.get('/Convocatorias/list', AnnouncementController.findforfilter);
router.put('/convocatorias/cerrar/:id(\\d+)', AnnouncementController.editStatus);

router.put('/convocatorias/:id(\\d+)', AnnouncementController.edit);

router.get('/convocatorias/closedcalls', AnnouncementController.closedCalls);

router.get('/estudianteConvocatoria/:id(\\d+)', personAnnouncementController.listAnnouncementStudent);
router.get('/estudianteConvocatoria/:id(\\d+)', PersonController.find);

// closing reason
router.get('/closingReason/all', ClosingReasonController.listAll);

module.exports = router;
