import { withStateHandlers } from 'recompose';

/**
 * Handle switching between segment and step view of the burnout schedule.
 * @param {bool} showSegments - Whether to show segments (raw) or steps (formatted).
 * @param {function} handleChangeView - Switch between segment and step view.
 * @returns {function} - A higher order component.
 */
export default withStateHandlers(
	{
		showSegments: false
	},
	{
		toggleSegmentView: ({ showSegments }) => () => ({
			showSegments: !showSegments
		})
	}
);
