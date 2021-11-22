const hash = require('object-hash');

const connections = {};
let knex;
const connection = (connectionString, options = {}) => {
	options = { client: 'pg', connection: connectionString, ...options };
	const key = hash(options);
	if (!connections[key]) {
		knex = require('knex');
		connections[key] = new knex(options);
	}
	return { db: connections[key], knex };
};

module.exports = connection;
