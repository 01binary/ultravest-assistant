/**
 * Merge flask state and flask state from query
 * @param {object} query - The query state provided by withQuery.
 * @param {object} flask - The flask state provided by withFlask.
 * @param {object} handlers - The handlers provided by withFlask.
 * @returns {object} - The flask props.
 */
export default ({
	query,
	flask,
	...handlers
}) => ({
	presets: flask.presets,
	preset: (query.flask && query.flask.preset) || flask.preset,
	diameter: (query.flask && query.flask.diameter) || flask.diameter,
	height: (query.flask && query.flask.height) || flask.height,
	...handlers
});
