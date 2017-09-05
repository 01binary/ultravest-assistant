export default (presets) => Object.keys(presets)
	.filter(presetName => !presets[presetName].default);
