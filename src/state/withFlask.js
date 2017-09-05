import { withState, withHandlers, compose } from 'recompose';
import presets from '../config/flaskPresets';
import getDefaultPreset from '../lib/getDefaultPreset';

const defaultPreset = getDefaultPreset(presets);

export default compose(
	withState(
		'flask',
		'setFlask',
		{
			preset: defaultPreset,
			presets,
			diameter: presets[defaultPreset].diameter,
			height: presets[defaultPreset].height
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
