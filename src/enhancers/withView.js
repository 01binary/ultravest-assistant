import { withStateHandlers } from 'recompose';

export const VIEW_SEGMENTS = 'segments';
export const VIEW_STEPS = 'steps';

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
		handleChangeView: () => ({ target }) => ({
			showSegments: target.id === VIEW_SEGMENTS
		})
	}
);
