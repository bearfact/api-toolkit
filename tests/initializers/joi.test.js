test('should export a Joi instance', () => {
	expect.assertions(2);
	const Joi = require('../../initializers/joi');
	expect(Joi.string).toBeDefined();
	expect(Joi.validate).toBeDefined();
});
