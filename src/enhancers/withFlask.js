import { withStateHandlers } from 'recompose';
import getDefaultPresetName from '../selectors/getDefaultPresetName';
import presets from '../config/flaskPresets';

export const CUSTOM = 'custom';
export const DEFAULT = getDefaultPresetName(presets);

export default withStateHandlers(
	{
		flask: {
			presets,
			preset: DEFAULT,
			diameter: presets[DEFAULT].diameter,
			height: presets[DEFAULT].height
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
				preset: CUSTOM,
				diameter: parseFloat(target.value),
				height: flask.height
			}
		}),

		handleFlaskHeightChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets: flask.presets,
				preset: CUSTOM,
				diameter: flask.diameter,
				height: parseFloat(target.value)
			}
		}),

		handleAddFlaskPreset: ({ flask }) => event => {
			const key = `${flask.diameter} × ${flask.height}`;

			event.preventDefault();

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

		handleRemoveFlaskPreset: ({ flask }) => event => {
			const keys = Object.keys(flask.presets);
			const nextKey = getNextKey(
				keys,
				keys.indexOf(flask.preset)
			);

			event.preventDefault();

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
