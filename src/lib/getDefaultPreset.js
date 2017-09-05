export default (presets) => (
	Object
		.keys(presets)
		.map(presetName => presets[presetName].default)
		.filter(select => select)
);
