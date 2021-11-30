module.exports = (req) => {
	const LIMIT = 50;
	const POPULATE = null;
	const PROJECTION = null;
	const SKIP = 0;
	const SORT_DIRECTION = 'ASC';
	const SORT_PROPERTY = 'id';

	const options = {
		limit: LIMIT,
		populate: POPULATE,
		projection: PROJECTION,
		skip: SKIP,
		sortDirection: SORT_DIRECTION,
		sortProperty: SORT_PROPERTY,
	};

	if (
		req.limit === 0 ||
		(req.query && req.query.limit === 0) ||
		(req.body && req.body.limit === 0)
	) {
		options.limit = 0;
	} else if (
		req.limit ||
		(req.query && req.query.limit) ||
		(req.body && req.body.limit)
	) {
		options.limit = req.limit || req.query.limit || req.body.limit;
		if (options.limit === 'undefined') options.limit = LIMIT;
	}
	delete req.limit;
	if (req.query) delete req.query.limit;
	if (req.body) delete req.body.limit;

	if (
		req.populate ||
		(req.query && req.query.populate) ||
		(req.body && req.body.populate)
	) {
		options.populate = req.populate || req.query.populate || req.body.populate;
		if (options.populate === 'undefined') options.populate = POPULATE;
	}
	delete req.populate;
	if (req.query) delete req.query.populate;
	if (req.body) delete req.body.populate;

	if (
		req.projection ||
		(req.query && req.query.projection) ||
		(req.body && req.body.projection)
	) {
		options.projection =
			req.projection || req.query.projection || req.body.projection;
		if (options.projection === 'undefined') options.projection = PROJECTION;
	}
	delete req.projection;
	if (req.query) delete req.query.projection;
	if (req.body) delete req.body.projection;

	if (
		req.skip ||
		(req.query && req.query.skip) ||
		(req.body && req.body.skip)
	) {
		options.skip = req.skip || req.query.skip || req.body.skip;
		if (options.skip === 'undefined') options.skip = SKIP;
	}
	delete req.skip;
	if (req.query) delete req.query.skip;
	if (req.body) delete req.body.skip;

	if (
		req.sortDirection ||
		(req.query && req.query.sortDirection) ||
		(req.body && req.body.sortDirection)
	) {
		options.sortDirection =
			req.sortDirection || req.query.sortDirection || req.body.sortDirection;
		if (options.sortDirection === 'undefined') {
			options.sortDirection = SORT_DIRECTION;
		}
	}
	delete req.sortDirection;
	if (req.query) delete req.query.sortDirection;
	if (req.body) delete req.body.sortDirection;

	if (
		req.sortProperty ||
		(req.query && req.query.sortProperty) ||
		(req.body && req.body.sortProperty)
	) {
		options.sortProperty =
			req.sortProperty || req.query.sortProperty || req.body.sortProperty;
		if (options.sortProperty === 'undefined') {
			options.sortProperty = SORT_PROPERTY;
		}
	}
	delete req.sortProperty;
	if (req.query) delete req.query.sortProperty;
	if (req.body) delete req.body.sortProperty;

	return options;
};
