import { compose, withState, withHandlers } from 'recompose';
import presets from '../config/flaskPresets';
import getDefaultPresetName from '../selectors/getDefaultPresetName';

const customPresetName = 'Custom';
const defaultPresetName = getDefaultPresetName(presets);

export default compose(
	withState(
		'flask',
		'setFlask',
		{
			presets,
			preset: defaultPresetName,
			diameter: presets[defaultPresetName].diameter,
			height: presets[defaultPresetName].height
		}
	),
	withHandlers({
		setFlaskPreset: ({ setFlask }) => (preset, then) => setFlask({
			preset
		}, then),

		setFlaskDiameter: ({ setFlask }) => (diameter, then) => setFlask({
			diameter,
			preset: customPresetName
		}, then),

		setFlaskHeight: ({ setFlask }) => (height, then) => setFlask({
			height,
			preset: customPresetName
		}, then)
	})
);
