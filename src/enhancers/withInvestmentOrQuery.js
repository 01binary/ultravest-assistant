import { mapProps } from 'recompose';
import { mergeWith, defaultTo, compose } from 'ramda';
import getFlaskOrQuery from '../selectors/getFlaskOrQuery';

/**
 * Merge investment state and investment state from query.
 * @param {Object} query - The state provided by withQuery.
 * @param {Object} flask - The state provided by withFlask.
 * @param {Object} investment - The state provided by withInvestment.
 * @param {function} handleInvestmentPresetChange - The handler provided by withInvestment.
 * @param {function} handleQueryParamChange - The handler provided by withQuerySync.
 * @returns {Object} - The investment props.
 */
export default mapProps(({
	query,
	flask,
	investment,
	handleInvestmentPresetChange,
	handleQueryParamChange
}) => ({
	...mergeWith(defaultTo, investment, query.investment || {}),

	flask: getFlaskOrQuery(flask, query.flask),

	handleQueryPresetChange: compose(
		handleInvestmentPresetChange,
		handleQueryParamChange('investment.preset')
	)
}));
