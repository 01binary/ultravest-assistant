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
			query = Object.assign(query, getValues(value, stateKey));
		}
		else {
			query[stateKey] = state[stateKey];
		}

		return state;
	}, {});

/**
 * Flatten object
 * @param {object} obj - The object to flatten.
 * @param {string} key - The parent object key.
 * @returns {object} - The flattened object.
 */
const getValues = (obj, key) => Object
	.keys(obj)
	.reduce((flat, leafKey) => {
		flat[`${key}-${leafKey}`] = obj[leafKey];
		return flat;
	}, {});
