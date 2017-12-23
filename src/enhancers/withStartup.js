import { lifecycle } from 'recompose';

/**
 * Initialize application
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default lifecycle({
	componentDidMount: ({
		handleQueryChange,
		handleHistoryChange
	}) => (
		global.window &&
		handleQueryChange(global.window.location) &&
		handleHistoryChange(handleQueryChange)
	)
});
