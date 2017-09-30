import getFlaskVolume from './getFlaskVolume';

/**
 * Calculate the weight of investment and water needed for the given flask.
 * @param {object} flask - The flask props.
 * @param {object} investment - The investment props.
 * @returns {object} - The weights of investment and water in grams.
 */
export default ({ flask, investment }) => getWeight(
	investment.presets[investment.preset],
	getFlaskVolume(flask)
);

const getWeight = (preset, volume) => (
	Object
		.keys(preset)
		.filter(key => key !== 'default')
		.sort((first, second) => first > second ? 1 : -1)
		.map(component => ({
			component,
			grams: Math.round(preset[component] * volume)
		}))
);
