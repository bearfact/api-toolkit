// All modules that need to run at app boot

require('./dotenv'); // must be first

// NOTE: Do not include the arena-auth initializer - it is optional and should be imported directly if needed
const errors = require('./errors');
const joi = require('./joi');
const knex = require('./knex');
const logger = require('./logger');
const mongoose = require('./mongoose');
const sequelize = require('./sequelize');
const utils = require('./utils');

module.exports = {
	errors,
	joi,
	knex,
	logger,
	mongoose,
	sequelize,
	utils,
};
