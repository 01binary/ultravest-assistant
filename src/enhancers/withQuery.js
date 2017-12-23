import qs from 'qs';
import { withStateHandlers } from 'recompose';
import getQueryFromState from '../selectors/getQueryFromState';
import getStateFromQuery from '../selectors/getStateFromQuery';

export const initialState = {
	query: {}
};

/**
 * Provide query string handlers
 * @param {function} component - The component   to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		...initialState
	},
	{
		handleQueryChange: state => ({ search }) => ({
			query: getStateFromQuery(qs.parse(search))
		}),

		handleQueryParamChange: state => (key, value) => {
			const next = {
				query: {
					...state.query,
					[key]: value
				}
			};

			if (this.props.handleHistoryPush) {
				this.props.handleHistoryPush(
					qs.serialize(getQueryFromState(next))
				);
			}

			return next;
		}
	}
);
