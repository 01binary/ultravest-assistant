import { lifecycle } from 'recompose';
import getQueryString from '../selectors/getQueryString';

/**
 * Initialize application
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default lifecycle({
	componentDidMount() {
		if (this.props.handleQueryChange && this.props.handleHistoryChange) {
			this.props.handleQueryChange(getQueryString());
			this.props.handleHistoryChange(this.props.handleQueryChange);
		}
	}
});
