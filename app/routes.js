const express = require('express');
const PersonController = require('./controllers/PersonController');
const UserController = require('./controllers/UsersController');

console.log(UserController);
const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);
// Users Routes
router.put('/users/:id', UserController.edit); // edit user
module.exports = router;
// Users Routes
router.post('/users', UserController.save); // Create new users
router.get('/users/:id(\\d+)', UserController.find); // Find user by id
router.delete('/users/:id(\\d+)', UserController.delete); // Delete User
router.get('/users/find_by_name/:name', UserController.findByName);
router.get('/users/all', UserController.listAll); // List all users
module.exports = router;
