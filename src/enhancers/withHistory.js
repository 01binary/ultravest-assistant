import { withStateHandlers } from 'recompose';
import history from 'history';

export const initialState = {
	browserHistory: null
};

/**
 * Provide browser history access
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		...initialState
	},
	{
		handleHistoryChange: state => listener => {
			const browserHistory = history.createBrowserHistory();
			browserHistory.listen(listener);
			return { browserHistory };
		},

		handleHistoryPush: ({ browserHistory }) => url => {
			browserHistory.push(url);
		}
	}
);
