/**
 * Calculate total burnout time for the given preset.
 * @param {object} burnoutPreset - The burnout preset from burnoutPresets.json.
 * @returns {number} - The total time in hours for the burnout process.
 */
export default burnoutPreset => (
	Math.round(burnoutPreset.segments.reduce((total, segment, index) =>
		total +
		( index ?
			segment.temp - burnoutPreset.segments[index - 1].temp :
			segment.temp
		) / segment.rate + segment.hold,
	0), 1)
);
