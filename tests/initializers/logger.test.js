test('should export a bunyan logger', () => {
	expect.assertions(1);
	const { logger } = require('../../initializers');
	expect(logger).toBeInstanceOf(require('bunyan'));
});
