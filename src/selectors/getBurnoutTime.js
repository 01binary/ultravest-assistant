/**
 * Calculate total burnout time for the given preset.
 * @param {Object} schedule - The burnout schedule.
 * @returns {number} - The total time in hours for the burnout process.
 */
export default schedule => (
	Math.round(schedule.reduce((total, segment, index) =>
		total +
		( index ?
			segment.temp - schedule[index - 1].temp :
			segment.temp
		) / segment.rate + segment.hold,
	0), 1)
);
