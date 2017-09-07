/**
 * Get the name of the default preset.
 * @param {object} presets - The available presets.
 * @returns - The default preset name or undefined.
 */
export default (presets) =>
	Object.keys(presets).filter(
		presetName => presets[presetName].default
	)[0];
