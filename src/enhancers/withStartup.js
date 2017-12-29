import { lifecycle } from 'recompose';
import getLocation from '../selectors/getLocation';

/**
 * Initialize application
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default lifecycle({
	componentDidMount() {
		if (this.props.handleHistoryCreate &&
			this.props.handleHistoryPush &&
			this.props.handleQueryChange &&
			this.props.handleQueryParamListenerChange) {

			// Initialize query state
			this.props.handleQueryChange(getLocation());

			// Push any programmatic changes to query state to history
			this.props.handleQueryParamListenerChange(this.props.handleHistoryPush);

			// Initialize history and update query state on back/forward navigation
			this.props.handleHistoryCreate(this.props.handleQueryChange);
		}
	}
});
