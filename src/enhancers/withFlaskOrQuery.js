import { mapProps } from 'recompose';
import { mergeWith, defaultTo, propOr } from 'ramda';
import getEventValue from '../selectors/getEventValue';

/**
 * Merge flask state and flask state from query
 * @param {Object} query - The query state provided by withQuery.
 * @param {Object} flask - The flask state provided by withFlask.
 * @param {function} handleFlaskPresetChange - The flask preset handler provided by withFlask.
 * @param {function} handleFlaskDiameterChange - The flask diameter handler provided by withFlask.
 * @param {function} handleFlaskHeightChange - The flask height handler provided by withFlask.
 * @param {function} handleAddFlaskPreset - The flask preset add handler provided by withFlask.
 * @param {function} handleRemoveFlaskPreset - The flask preset remove handler provided by withFlask.
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
	...mergeWith(defaultTo, flask, getQueryFlask(query)),

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

const getQueryFlask = propOr({}, 'flask');
