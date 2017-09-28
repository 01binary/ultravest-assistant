import { withStateHandlers } from 'recompose';
import getDefaultPresetName from '../selectors/getDefaultPresetName';
import presets from '../config/flaskPresets';

export const CUSTOM_PRESET = 'Custom';
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
		handleFlaskPresetChange: () => ({ target }) => ({
			flask: {
				presets,
				preset: target.value,
				diameter: presets[target.value].diameter,
				height: presets[target.value].height
			}
		}),

		handleFlaskDiameterChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets,
				preset: CUSTOM_PRESET,
				diameter: parseInt(target.value, 10),
				height: flask.height
			}
		}),

		handleFlaskHeightChange: ({ flask }) => ({ target }) => ({
			flask: {
				presets,
				preset: CUSTOM_PRESET,
				diameter: flask.diameter,
				height: parseInt(target.value, 10)
			}
		})
	}
);
