/**
 * Get burnout preset for flask size.
 * @param {object} presets - The available burnout presets.
 * @param {object} flask - The flask size.
 * @returns - The shortest burnout for the given flask or the longest, if flask is too big.
 */
export default (presets, flask) => (
	presets
		.sort(flaskSizeAscending)
		.filter(preset => (
			preset.diameter >= flask.diameter &&
			preset.height >= flask.height
		)) [0] || presets[presets.length - 1]
);

function flaskSizeAscending(first, second) {
	return (
		first.diameter > second.diameter &&
		first.height > second.height
	) ? 1 : -1;
}
