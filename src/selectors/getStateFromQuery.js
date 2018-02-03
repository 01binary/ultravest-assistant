import qs from 'qs';

/**
 * Parse query string into normalized application state.
 * @param {string} query - The query string to parse.
 * @returns {Object} - Normalized application state.
 */
export default query => normalizeQuery(parseQuery(query));

/**
 * Normalize parsed query state into application state.
 * @param {Object} query - The destructured query state.
 * @returns {Object} - The normalized application state.
 */
const normalizeQuery = query => (
	Object
		.keys(query)
		.reduce((state, queryKey) => {
			const [key, subkey] = queryKey.split('-');

			if (subkey) {
				state[key] = Object.assign({
					[subkey]: query[queryKey]
				}, state[key]);
			}
			else {
				state[queryKey] = query[queryKey];
			}

			return state;
		}, {})
);

/**
 * Parse query string to an object.
 * @param {string} query - The query string.
 * @returns {Object} - The parsed query.
 */
const parseQuery = query => (
	qs.parse(query.substring(1))
);
