import { mapProps } from 'recompose';
import { mergeWith, defaultTo, compose } from 'ramda';

/**
 * Merge flask state and flask state from query.
 * @param {Object} query - The state provided by withQuery.
 * @param {Object} flask - The state provided by withFlask.
 * @param {function} handleFlaskPresetChange - The handler provided by withFlask.
 * @param {function} handleFlaskDiameterChange - The handler provided by withFlask.
 * @param {function} handleFlaskHeightChange - The handler provided by withFlask.
 * @param {function} handleAddFlaskPreset - The handler provided by withFlask.
 * @param {function} handleRemoveFlaskPreset - The handler provided by withFlask.
 * @param {function} handleQueryParamChange - The handler provided by withQuerySync.
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

	handleQueryPresetChange: compose(
		handleFlaskPresetChange,
		handleQueryParamChange('flask.preset'),
		getUndecoratedFlaskPreset
	),

	handleQueryDiameterChange: compose(
		handleFlaskDiameterChange,
		handleQueryParamChange('flask.diameter')
	),

	handleQueryHeightChange: compose(
		handleFlaskHeightChange,
		handleQueryParamChange('flask.height')
	),

	handleAddFlaskPreset,
	handleRemoveFlaskPreset
}));

/**
 * Get display text for flask preset.
 * @param {Object} event - The flask preset change event.
 * @returns {string} - The display text for flask preset.
 */
const getUndecoratedFlaskPreset = ({ target }) => ({
	target: {
		...target,
		value: target.value.replace(' × ', 'x')
	}
});
