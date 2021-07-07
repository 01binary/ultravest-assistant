import { withStateHandlers } from 'recompose';
import getStateFromQuery from '../selectors/getStateFromQuery';

export const initialState = {
	query: {},
	history: null
};

/**
 * Provide query arguments.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default 	withStateHandlers(
	{
		...initialState
	},
	{
		handleQueryInit: state => history => ({
			query: getStateFromQuery(history.location.search),
			history
		}),

		handleQueryLocationChange: state => ({ search }) => ({
			...state,
			query: getStateFromQuery(search)
		}),

		handleQueryChange: state => query => ({
			...state,
			query
		})
	}
);
