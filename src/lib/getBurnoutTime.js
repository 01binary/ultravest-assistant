/**
 * Calculate total burnout time for the given preset.
 * @param {object} burnoutPreset - The burnout preset from burnoutPresets.json.
 * @returns {number} - The total time in hours for the burnout process.
 */
module.exports = (burnoutPreset) => (
	burnoutPreset.schedule.reduce((total, segment, index) =>
		( index ?
			segment.temp - burnoutPreset.schedule[index - 1] :
			segment.temp
		) / segment.rate + segment.hold,
	0)
);
