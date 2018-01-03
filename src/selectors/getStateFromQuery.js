/**
 * Inflate objects from parsed query string.
 * @param {object} query - A parsed query string.
 * @returns {object} - Inflated state.
 */
export default query => Object
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
	}, {});
