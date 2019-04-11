const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

//why is this in square brackets?
module.exports = knex(config[dbEnv]);