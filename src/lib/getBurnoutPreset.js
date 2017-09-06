const byFlaskSizeAscending = (preset1, preset2) => (
	(
		preset1.diameter > preset2.diameter &&
		preset1.height > preset2.height
	) ? 1 : -1
);

export default (burnoutPresets, flask) => (
	burnoutPresets
		.sort(byFlaskSizeAscending)
		.filter((preset) => (
			preset.diameter >= flask.diameter &&
			preset.height >= flask.height
		)) [0] || burnoutPresets[burnoutPresets.length - 1]
);
