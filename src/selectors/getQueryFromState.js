import qs from 'qs';

/**
 * Serialize state to query string.
 * @param {Object} state - The state to serialize.
 * @returns {string} - The query string including '?'.
 */
export default state => serializeQuery(Object
	.keys(state)
	.reduce((query, stateKey) => {
		const value = state[stateKey];

		if (typeof(value) === 'object') {
			query = Object.assign(destructureQuery(value, stateKey), query);
		}
		else {
			query[stateKey] = state[stateKey];
		}

		return query;
	}, {})
);

/**
 * Destructure state into a flat object ready for serialization.
 * @param {Object} obj - The object to flatten.
 * @param {string} rootKey - The parent object key.
 * @returns {Object} - The flattened object.
 */
const destructureQuery = (obj, rootKey) => Object
	.keys(obj)
	.reduce((flat, leafKey) => {
		flat[`${rootKey}-${leafKey}`] = obj[leafKey];
		return flat;
	}, {});

/**
 * Serialize destructured query state into query string.
 * @param {Object} query - The denormalized query object.
 * @returns {string} - The serialized query.
 */
const serializeQuery = query => (
	`?${qs.stringify(query)}`
);
