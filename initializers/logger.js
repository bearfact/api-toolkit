const bunyan = require('bunyan');

const DEFAULT_OPTIONS = {
	name: process.env.LOGGER_NAME,
	level: process.env.LOG_LEVEL || 'debug',
	src: false,
	serializers: bunyan.stdSerializers,
	stream: process.stdout,
};

const logger = bunyan.createLogger({ ...DEFAULT_OPTIONS, src: true });

module.exports = logger;
