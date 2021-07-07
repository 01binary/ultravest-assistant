import { lifecycle } from 'recompose';
import { createBrowserHistory } from 'history';

/**
 * Initialize application.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default lifecycle({
	componentDidMount() {
		const { handleQueryInit, handleQueryLocationChange } = this.props;

		if (handleQueryInit && handleQueryLocationChange) {
			const browserHistory = createBrowserHistory();
			browserHistory.listen(handleQueryLocationChange);

			handleQueryInit(browserHistory);
		}
	}
});
