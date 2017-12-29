import { withStateHandlers } from 'recompose';
import { createBrowserHistory } from 'history';

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
			const browserHistory = createBrowserHistory();
			browserHistory.listen(listener);
			return { browserHistory };
		},

		handleHistoryPush: ({ browserHistory }) => url => {
			browserHistory.push(url);
			return { browserHistory };
		}
	}
);
