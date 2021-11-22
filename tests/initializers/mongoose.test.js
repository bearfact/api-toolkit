test('should export a  mongoose connector', () => {
	expect.assertions(1);
	const mongoose = require('../../initializers/mongoose');
	expect(mongoose.connect).toBeDefined();
});
