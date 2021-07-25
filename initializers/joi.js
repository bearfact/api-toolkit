const Joi = require('joi');

module.exports = Joi.defaults(schema => {
	return schema.options({ abortEarly: false, stripUnknown: { arrays: false, objects: true } });
});
