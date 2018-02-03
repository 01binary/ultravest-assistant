import { assocPath } from 'ramda';
import { withStateHandlers } from 'recompose';
import getQueryFromState from '../selectors/getQueryFromState';
import getStateFromQuery from '../selectors/getStateFromQuery';

export const initialState = {
	query: {},
	history: null
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
		handleQueryInit: state => (history) => ({
			query: getStateFromQuery(history.location.search),
			history
		}),

		handleQueryChange: state => ({ search }) => ({
			query: getStateFromQuery(search),
			...state
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
