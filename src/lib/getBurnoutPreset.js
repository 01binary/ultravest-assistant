
export default (burnoutPresets, flask) => (
	burnoutPresets.filter(
		(preset) => (
			preset.diameter <= flask.diameter &&
			preset.height <= flask.height
		)
	)[0] || burnoutPresets[burnoutPresets.length - 1]
);
