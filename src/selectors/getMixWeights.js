import getFlaskVolume from 'getFlaskVolume';

/**
 * Calculate the weight of investment and water needed for the given flask.
 * @param {object} flask - The flask props.
 * @param {object} investment - The investment props.
 * @returns {object} - The weights of investment and water in grams.
 */
export default (flask, investment) => getWeight(
	investment.presets[investment.preset],
	getFlaskVolume(flask)
);

const getWeight = (preset, volume) => (
	Object.keys(preset)
		.map(component => ({
			component,
			grams: preset[component] * volume
		}))
		.reduce((mix, weight) =>
			mix[weight.component] = weight.grams,
		{})
);
