import getFlaskVolume from './getFlaskVolume';

/**
 * Calculate the weight of investment and water needed for the given flask.
 * @param {string} preset - The investment preset.
 * @param {Object[]} presets - The investment presets.
 * @param {Object} flask - The flask props.
 * @returns {Object} - The weights of investment and water in grams.
 */
export default (flask, preset, presets) => getWeight(
	presets[preset],
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
