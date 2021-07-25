const jwt = require('jsonwebtoken');

const asyncWrap = require('./async.middleware');

module.exports = (secret = null, algorithm = 'HS256') => {
	return asyncWrap(async (req, res, next) => {
		const authHeader = (req.headers || {}).authorization;
		if (authHeader && authHeader.startsWith('Bearer ')) {
			let decoded = {};
			const token = authHeader.split('Bearer ')[1];
			if (!secret) {
				decoded = jwt.decode(token);
			} else {
				decoded = jwt.verify(token, secret, { algorithms: [algorithm] })
			}
			req.claims = decoded;
		}
		return next();
	});
};
