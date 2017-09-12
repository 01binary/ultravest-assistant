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
		setFlaskPreset: () => ({ target }) => ({
			flask: {
				preset: target.value,
				diameter: presets[target.value].diameter,
				height: presets[target.value].height
			}
		}),

		setFlaskDiameter: () => ({ target }) => ({
			flask: {
				preset: CUSTOM_PRESET,
				diameter: parseInt(target.value, 10)
			}
		}),

		setFlaskHeight: () => ({ target }) => ({
			flask: {
				preset: CUSTOM_PRESET,
				height: parseInt(target.value, 10)
			}
		})
	}
);
