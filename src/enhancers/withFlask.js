import { withStateHandlers } from 'recompose';
import getDefaultPresetName from '../selectors/getDefaultPresetName';
import presets from '../config/flaskPresets';

export const CUSTOM_PRESET = 'custom';
export const DEFAULT_PRESET = getDefaultPresetName(presets);

export default withStateHandlers(
	{
		flask: {
			presets,
			preset: DEFAULT_PRESET,
			diameter: presets[DEFAULT_PRESET].diameter,
			height: presets[DEFAULT_PRESET].height
		}
	},
	{
		handleFlaskPresetChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets: flask.presets,
				preset: target.value,
				diameter: flask.presets[target.value].diameter,
				height: flask.presets[target.value].height
			}
		}),

		handleFlaskDiameterChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets: flask.presets,
				preset: CUSTOM_PRESET,
				diameter: parseFloat(target.value),
				height: flask.height
			}
		}),

		handleFlaskHeightChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets: flask.presets,
				preset: CUSTOM_PRESET,
				diameter: flask.diameter,
				height: parseFloat(target.value)
			}
		}),

		handleAddFlaskPreset: ({ flask }) => () => {
			const key = `${flask.diameter} × ${flask.height}`;

			return {
				flask: {
					presets: flask.presets[key] ?
						flask.presets :
						Object.assign({}, flask.presets, {
							[key]: {
								diameter: flask.diameter,
								height: flask.height
							}
						}),
					preset: key,
					diameter: flask.diameter,
					height: flask.height
				}
			};
		},

		handleRemoveFlaskPreset: ({ flask }) => () => {
			const keys = Object.keys(flask.presets);
			const nextKey = getNextKey(
				keys,
				keys.indexOf(flask.preset)
			);

			return {
				flask: {
					presets: keys
						.filter(key => key !== flask.preset)
						.reduce((next, key) => Object.assign(next, {
							[key]: flask.presets[key]
						}), {}),
					preset: nextKey,
					diameter: nextKey && flask.presets[nextKey].diameter,
					height: nextKey && flask.presets[nextKey].height
				}
			};
		}
	}
);

const getNextKey = (keys, index) => (
	keys[index + 1] ||
	keys[index - 1] ||
	null
);
