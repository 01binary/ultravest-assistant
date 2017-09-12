import { withStateHandlers } from 'recompose';
import getDefaultPresetName from '../selectors/getDefaultPresetName';
import presets from '../config/flaskPresets';

const CUSTOM = 'Custom';
const defaultPresetName = getDefaultPresetName(presets);
const defaultState = {
	presets,
	preset: defaultPresetName,
	diameter: presets[defaultPresetName].diameter,
	height: presets[defaultPresetName].height
};

export default withStateHandlers(
	{
		flask: defaultState
	},
	{
		setFlaskPreset: () => ({ target }) => {
			console.log('setFlaskPreset returning value');
			return {
				flask: {
					preset: target.value,
					diameter: presets[target.value].diameter,
					height: presets[target.value].height
				}
			};
		},

		setFlaskDiameter: () => ({ target }) => ({
			flask: {
				preset: CUSTOM,
				diameter: parseInt(target.value, 10)
			}
		}),

		setFlaskHeight: () => ({ target }) => ({
			flask: {
				preset: CUSTOM,
				height: parseInt(target.value, 10)
			}
		})
	}
);
