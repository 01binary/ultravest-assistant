import { withStateHandlers } from 'recompose';

/**
 * Handle switching between segment and step view of the burnout schedule.
 * @param {bool} showSegments - Whether to show segments (raw) or steps (formatted).
 * @param {func} handleChangeView - Switch between segment and step view.
 * @returns {func} - A higher order component.
 */
export default withStateHandlers(
	{
		showSegments: false
	},
	{
		handleChangeView: () => showSegments => {
			console.log('doing segs', showSegments);
			return ({
				showSegments
			});
		}
	}
);
