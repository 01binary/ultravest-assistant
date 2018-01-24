/**
 * Get burnout preset for flask size.
 * @param {Object} presets - The available burnout presets.
 * @param {Object} flask - The flask size.
 * @returns - The shortest burnout for the given flask or the longest, if flask is too big.
 */
export default (presets, flask) => (
	presets
		.sort((first, second) =>
			(first.diameter * first.height) -
			(second.diameter * second.height)
		)
		.filter(preset => (
			preset.diameter >= flask.diameter &&
			preset.height >= flask.height
		))[0] ||
	presets[presets.length - 1]
).segments;
