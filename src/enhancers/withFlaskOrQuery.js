import { mapProps } from 'recompose';
import { mergeWith, defaultTo, propOr } from 'ramda';

/**
 * Merge flask state and flask state from query
 * @param {object} query - The query state provided by withQuery.
 * @param {object} flask - The flask state provided by withFlask.
 * @param {function} handleFlaskPresetChange - The flask preset handler provided by withFlask.
 * @param {function} handleFlaskDiameterChange - The flask diameter handler provided by withFlask.
 * @param {function} handleFlaskHeightChange - The flask height handler provided by withFlask.
 * @param {function} handleAddFlaskPreset - The flask preset add handler provided by withFlask.
 * @param {function} handleRemoveFlaskPreset - The flask preset remove handler provided by withFlask.
 * @returns {object} - The flask props.
 */
export default mapProps(({
	query,
	flask,
	handleFlaskPresetChange,
	handleFlaskDiameterChange,
	handleFlaskHeightChange,
	handleAddFlaskPreset,
	handleRemoveFlaskPreset
}) => ({
	...mergeWith(defaultTo, flask, getQueryFlask(query)),
	handleFlaskPresetChange,
	handleFlaskDiameterChange,
	handleFlaskHeightChange,
	handleAddFlaskPreset,
	handleRemoveFlaskPreset
}));

const getQueryFlask = propOr({}, 'flask');
