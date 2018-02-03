import { lifecycle } from 'recompose';
import { createBrowserHistory } from 'history';

/**
 * Initialize application
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default lifecycle({
	componentDidMount() {
		const { handleQueryInit, handleQueryChange } = this.props;

		if (handleQueryInit && handleQueryChange) {
			const browserHistory = createBrowserHistory();
			browserHistory.listen(handleQueryChange);

			handleQueryInit(browserHistory);
		}
	}
});
