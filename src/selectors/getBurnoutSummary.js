import burnoutPresets from '../config/burnoutPresets';
import getBurnoutPreset from '../selectors/getBurnoutPreset';
import getBurnoutTime from '../selectors/getBurnoutTime';

const getFlaskSummary = (preset) => `${preset.diameter} X ${preset.height}`;
const getTimeSummary = (preset) => `${getBurnoutTime(preset)} hours`;
const getPresetSummary = (preset) => (
	`${getFlaskSummary(preset)}, ${getTimeSummary(preset)}`
);

export default (flask) => getPresetSummary(
	getBurnoutPreset(burnoutPresets, flask)
);
