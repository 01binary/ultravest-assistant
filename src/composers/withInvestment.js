import { withStateHandlers } from 'recompose';
import presets from '../config/investmentPresets';
import getDefaultPresetName from '../selectors/getDefaultPresetName';

export const DEFAULT_PRESET = getDefaultPresetName(presets);

export default withStateHandlers(
	{
		investment: {
			preset: DEFAULT_PRESET,
			presets
		}
	},
	{
		setInvestmentPreset: () => ({ target }) => ({
			investment: {
				preset: target.value
			}
		})
	}
);
