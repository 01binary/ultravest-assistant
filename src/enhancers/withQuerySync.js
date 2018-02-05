import { assocPath } from 'ramda';
import { withHandlers } from 'recompose';
import getQueryFromState from '../selectors/getQueryFromState';
import getEventValue from '../selectors/getEventValue';

/**
 * Provide sync to query string.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withHandlers({
	handleQueryParamChange: ({
		query,
		history,
		handleQueryChange
	}) => path => event => {
		const queryWithParam = assocPath(
			path.split('.'),
			getEventValue(event),
			query
		);

		history.push(getQueryFromState(queryWithParam));
		handleQueryChange(queryWithParam);

		return event;
	}
});
