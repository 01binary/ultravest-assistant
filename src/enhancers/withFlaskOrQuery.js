import { mapProps } from 'recompose';
import { mergeWith, defaultTo } from 'ramda';
import getEventValue from '../selectors/getEventValue';

/**
 * Merge flask state and flask state from query.
 * @param {Object} query - The state provided by withQuery.
 * @param {Object} flask - The state provided by withFlask.
 * @param {function} handleFlaskPresetChange - The handler provided by withFlask.
 * @param {function} handleFlaskDiameterChange - The handler provided by withFlask.
 * @param {function} handleFlaskHeightChange - The handler provided by withFlask.
 * @param {function} handleAddFlaskPreset - The handler provided by withFlask.
 * @param {function} handleRemoveFlaskPreset - The handler provided by withFlask.
 * @param {function} handleQueryParamChange - The handler provided by withQuery.
 * @returns {Object} - The flask props.
 */
export default mapProps(({
	query,
	flask,
	handleFlaskPresetChange,
	handleFlaskDiameterChange,
	handleFlaskHeightChange,
	handleAddFlaskPreset,
	handleRemoveFlaskPreset,
	handleQueryParamChange
}) => ({
	...mergeWith(defaultTo, flask, query.flask || {}),

	handleQueryPresetChange: event => {
		handleFlaskPresetChange(event);
		handleQueryParamChange('flask.preset', getEventValue(event));
	},

	handleQueryDiameterChange: event => {
		handleFlaskDiameterChange(event);
		handleQueryParamChange('flask.diameter', getEventValue(event));
	},

	handleQueryHeightChange: event => {
		handleFlaskDiameterChange(event);
		handleQueryParamChange('flask.height', getEventValue(event));
	},

	handleAddFlaskPreset,
	handleRemoveFlaskPreset
}));
