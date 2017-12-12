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
			state[key] = Object.assign(state[key], {
				[subkey]: query[queryKey]
			});
		}
		else {
			state[queryKey] = query[queryKey];
		}

		return state;
	}, {});
