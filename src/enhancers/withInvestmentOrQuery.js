import { mapProps } from 'recompose';
import { mergeWith, defaultTo, propOr } from 'ramda';
import getEventValue from '../selectors/getEventValue';

/**
 * Merge investment state and investment state from query
 * @param {Object} query - The state provided by withQuery.
 * @param {Object} flask - The state provided by withFlask.
 * @param {Object} investment - The state provided by withInvestment.
 * @param {function} handleInvestmentPresetChange - The handler provided by withInvestment.
 * @param {function} handleQueryParamChange - The handler provided by withQuery.
 * @returns {Object} - The investment props.
 */
export default mapProps(({
	query,
	flask,
	investment,
	handleInvestmentPresetChange,
	handleQueryParamChange
}) => ({
	...mergeWith(defaultTo, investment, getQueryInvestment(query)),

	flask: mergeWith(defaultTo, flask, getQueryFlask(query)),

	handleQueryPresetChange: (event) => {
		handleInvestmentPresetChange(event);
		handleQueryParamChange('investment.preset', getEventValue(event));
	}
}));

const getQueryInvestment = propOr({}, 'investment');
const getQueryFlask = propOr({}, 'flask');
