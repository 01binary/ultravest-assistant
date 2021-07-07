import { withStateHandlers } from 'recompose';
import presets from '../config/investmentPresets';
import getDefaultPresetName from '../selectors/getDefaultPresetName';

export const DEFAULT_PRESET = getDefaultPresetName(presets);

/**
 * Provide investment parameters.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		investment: {
			preset: DEFAULT_PRESET,
			presets
		}
	},
	{
		handleInvestmentPresetChange: () => ({ target }) => ({
			investment: {
				presets,
				preset: target.value
			}
		})
	}
);
