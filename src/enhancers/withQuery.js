import qs from 'qs';
import { withStateHandlers } from 'recompose';
import getStateFromQuery from '../selectors/getStateFromQuery';
import getQueryFromState from '../selectors/getQueryFromState';

export const initialState = {
	query: {},
	onParamChange: null
};

/**
 * Provide query string handlers
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		...initialState
	},
	{
		handleQueryChange: state => ({ search }) => ({
			query: getStateFromQuery(qs.parse(search.substring(1)))
		}),

		handleQueryParamListenerChange: state => onParamChange => ({
			...state,
			onParamChange
		}),

		handleQueryParamChange: ({ query, onParamChange }) => (key, value) => {
			const next = {
				query: {
					...query,
					[key]: value
				},
				onParamChange
			};

			if (onParamChange) {
				onParamChange(`?${qs.stringify(getQueryFromState(next.query))}`);
			}

			return next;
		}
	}
);
