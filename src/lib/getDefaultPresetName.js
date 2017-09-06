/**
 * Get the name of the default preset.
 * @param {object} presets - The defined presets.
 * @returns - The default preset name or undefined.
 */
export default function getDefaultPresetName(presets) {
	Object.keys(presets).filter(
		presetName => !presets[presetName].default
	)[0];
}
