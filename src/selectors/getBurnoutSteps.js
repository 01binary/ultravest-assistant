/**
 * Get friendly steps from a machine readable burnout program.
 * @param {object} preset - The burnout preset.
 * @returns {object[]} - The burnout steps ready for formatted output.
 * TODO: diagram for naming
 */
export default preset => preset.schedule.reduce(
	(steps, segment, index, schedule) => {
		const lastStep = steps.length && steps[steps.length - 1];
		const formattedTemp = `${segment.temp}°F`;
		const diff = lastStep ? segment.temp - lastStep.temp : segment.temp;
		const duration = Math.round(Math.abs(diff / segment.rate) * 10) / 10;

		// rate step
		// "raise to x°F over y hour[s]"
		// "lower to x°F over y hour[s] [for casting]"
		if (diff !== 0) {
			steps.push({
				heading: segment.name,
				action: diff < 0 ? 'lower to' : 'raise to',
				temp: formattedTemp,
				middle: 'over',
				time: `${duration} ${getUnits(duration)}`,
				end: index === schedule.length - 1 ? 'for casting' : null
			});
		}

		// hold step
		// "hold x°F for y hour[s]"
		if (segment.hold) {
			steps.push({
				heading: segment.name,
				action: 'hold',
				temp: formattedTemp,
				middle: 'for',
				time: `${segment.hold} ${getUnits(segment.hold)}`
			});
		}

		return steps;
	}, []);

const getUnits = time => time > 1 ? 'hours' : 'hour';
