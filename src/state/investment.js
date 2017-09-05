import { withState, withHandlers, compose } from 'recompose';
import presets from '../config/investmentPresets';
import getDefaultPreset from '../lib/getDefaultPreset';

export default compose(
	withState(
		'investment',
		'setInvestment',
		{
			preset: getDefaultPreset(presets),
			presets
		}
	),
	withHandlers({
		setInvestmentPreset: ({ setInvestment }) => (preset) =>
			setInvestment({ preset })
	})
);
