/**
 * Get burnout preset for flask size.
 * @param {object} burnoutPresets - The available burnout presets.
 * @param {object} flask - The flask size.
 * @returns - The shortest burnout for the given flask or the longest, if flask is too big.
 */
export default (burnoutPresets, flask) => (
	burnoutPresets
		.sort(flaskSizeAscending)
		.filter(preset => (
			preset.diameter >= flask.diameter &&
			preset.height >= flask.height
		))
		.reduce(lastOrDefault)
);

function flaskSizeAscending(first, second) {
	return (
		first.diameter > second.diameter &&
		first.height > second.height
	) ? 1 : -1;
}

function lastOrDefault(acc, preset) {
	return preset;
}
