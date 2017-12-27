import qs from 'qs';
import { withStateHandlers } from 'recompose';

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
			query: qs.parse(search.substring(1))
		}),

		handleQueryParamChange: state => (key, value) => {
			const next = {
				query: {
					...state.query,
					[key]: value
				}
			};

			console.log('query param change wants to push with', this.props.handleHistoryPush);

			if (this.props.handleHistoryPush) {
				this.props.handleHistoryPush(
					qs.serialize(next)
				);
			}

			return next;
		}
	}
);
