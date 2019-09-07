const knex = require('knex');
const config = require('../config/database');

const DB = knex(config);

module.exports = DB;
