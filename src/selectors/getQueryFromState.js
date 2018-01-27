/**
 * Deflate state into a flat object ready for serialization.
 * @param {Object} state - The state to deflate.
 * @returns {Object} - Deflated state.
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
 * @param {Object} obj - The object to flatten.
 * @param {string} rootKey - The parent object key.
 * @returns {Object} - The flattened object.
 */
const getValues = (obj, rootKey) => Object
	.keys(obj)
	.reduce((flat, leafKey) => {
		flat[`${rootKey}-${leafKey}`] = obj[leafKey];
		return flat;
	}, {});
