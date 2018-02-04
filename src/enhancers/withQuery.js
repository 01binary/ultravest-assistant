import { assocPath } from 'ramda';
import { withStateHandlers } from 'recompose';
import getQueryFromState from '../selectors/getQueryFromState';
import getStateFromQuery from '../selectors/getStateFromQuery';

export const initialState = {
	query: {},
	history: null
};

/**
 * Provide sync between query string and application state.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		...initialState
	},
	{
		handleQueryInit: state => (history) => ({
			query: getStateFromQuery(history.location.search),
			history
		}),

		handleQueryChange: state => ({ search }) => ({
			...state,
			query: getStateFromQuery(search)
		}),

		handleQueryParamChange: ({
			history,
			query,
			...state
		}) => (path, value) => {
			const queryWithParam = assocPath(path.split('.'), value, query);

			history.push(getQueryFromState(queryWithParam));

			return {
				query: queryWithParam,
				history,
				...state
			};
		}
	}
);
