/**
 * Merge investment state and investment state from query
 * @param {object} query - The query state provided by withQuery.
 * @param {object} investment - The investment state provided by withInvestment.
 * @param {object} handlers - The handlers provided by withInvestment.
 * @returns {object} - The investment props.
 */
export default ({
	query,
	investment,
	...handlers
}) => ({
	presets: (query.investment && query.investment.presets) ||
		investment.presets,
	preset: (query.investment && query.investment.preset) ||
		investment.preset,
	...handlers
});
