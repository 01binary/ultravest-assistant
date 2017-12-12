/**
 * Deflate state into a flat object ready for serialization.
 * @param {object} state - The state to deflate.
 * @returns {object} - Deflated state.
 */
export default state => Object
	.keys(state)
	.reduce((query, stateKey) => {
		const value = state[stateKey];

		if (typeof(value) === 'object') {
			query = Object.assign(getValues(value, stateKey), query);
		}
		else {
			query[stateKey] = state[stateKey];
		}

		return query;
	}, {});

/**
 * Flatten object
 * @param {object} obj - The object to flatten.
 * @param {string} rootKey - The parent object key.
 * @returns {object} - The flattened object.
 */
const getValues = (obj, rootKey) => Object
	.keys(obj)
	.reduce((flat, leafKey) => {
		flat[`${rootKey}-${leafKey}`] = obj[leafKey];
		return flat;
	}, {});
