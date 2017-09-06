import { withState, withHandlers, compose } from 'recompose';
import presets from '../config/investmentPresets';
import getDefaultPresetName from '../lib/getDefaultPresetName';

export default compose(
	withState(
		'investment',
		'setInvestment',
		{
			preset: getDefaultPresetName(presets),
			presets
		}
	),
	withHandlers({
		setInvestmentPreset: ({ setInvestment }) => (preset) =>
			setInvestment({ preset })
	})
);
