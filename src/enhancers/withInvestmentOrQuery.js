import { mapProps } from 'recompose';
import { mergeWith, defaultTo } from 'ramda';

/**
 * Merge investment state and investment state from query
 * @param {Object} query - The query state provided by withQuery.
 * @param {Object} flask - The flask props provided by withFlask.
 * @param {Object} investment - The investment state provided by withInvestment.
 * @param {function} handleInvestmentPresetChange - The handler provided by withInvestment.
 * @returns {Object} - The investment props.
 */
export default mapProps(({
	query,
	flask,
	investment,
	handleInvestmentPresetChange
}) => ({
	...mergeWith(defaultTo, investment, query.investment),
	flask: mergeWith(defaultTo, flask, query.flask),
	handleInvestmentPresetChange
}));
