import { CUSTOM } from '../enhancers/withFlask';

/**
 * Get flask state merged with query state.
 * @param {Object} flask - The state provided by withFlask.
 * @param {Object} queryFlask - The state provided by withQuery.
 */
export default (flask, queryFlask = {}) => ({
	presets: queryFlask.presets || flask.presets,
	preset: queryFlask.preset || flask.preset,
	diameter: (queryFlask.preset || flask.preset) === CUSTOM ?
		queryFlask.diameter || flask.diameter :
		flask.diameter,
	height: (queryFlask.preset || flask.preset) === CUSTOM ?
		queryFlask.height || flask.height :
		flask.height
});
