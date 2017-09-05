import burnoutPresets from '../config/burnoutPresets';
import getBurnoutPreset from '../lib/getBurnoutPreset';
import getBurnoutTime from '../lib/getBurnoutTime';

const getFlaskSummary = (preset) => `${preset.diameter} X ${preset.height}`;
const getTimeSummary = (preset) => `${getBurnoutTime(preset)} hours`;
const getPresetSummary = (preset) => (
	`${getFlaskSummary(preset)}, ${getTimeSummary(preset)}`
);

export default ({ flask }) => getPresetSummary(
	getBurnoutPreset(burnoutPresets)
);
