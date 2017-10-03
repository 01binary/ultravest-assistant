import { withStateHandlers } from 'recompose';

/**
 * Handle switching between segment and step view of the burnout schedule.
 * @param {bool} showSegments - Whether to show segments or steps.
 * @returns {func} - A higher order component.
 */
export default withStateHandlers(
	{
		showSegments: false
	},
	{
		handleChangeView: () => showSegments => ({
			showSegments
		})
	}
);
