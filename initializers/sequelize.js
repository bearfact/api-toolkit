const hash = require("object-hash");

const connections = {};
let sequelize;
const sequelizeConnection = (connectionString, options = {}) => {
	options = { logging: process.env.SQL_LOGGING === "true", ...options };
	const key = connectionString + hash(options);
	if (!connections[key]) {
		sequelize = require("sequelize");
		const { Sequelize } = sequelize;
		connections[key] = new Sequelize(connectionString, options);
	}
	return { db: connections[key], sequelize };
};

module.exports = sequelizeConnection;
