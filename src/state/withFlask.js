import { withState, withHandlers, compose } from 'recompose';
import presets from '../config/flaskPresets';
import getDefaultPresetName from '../lib/getDefaultPresetName';

const defaultPresetName = getDefaultPresetName(presets);

export default compose(
	withState(
		'flask',
		'setFlask',
		{
			preset: defaultPresetName,
			presets,
			diameter: presets[defaultPresetName].diameter,
			height: presets[defaultPresetName].height
		}
	),
	withHandlers({
		setFlaskPreset: ({ setFlask }) => (preset) => setFlask({ preset }),
		setFlaskDiameter: ({ setFlask }) => (diameter => setFlask({
			diameter,
			preset: 'Custom'
		})),
		setFlaskHeight: ({ setFlask }) => (height => setFlask({
			height,
			preset: 'Custom'
		}))
	})
);
