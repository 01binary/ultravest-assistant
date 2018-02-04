import { withStateHandlers } from 'recompose';

export const VIEWS = {
	SEGMENTS: 'segments',
	STEPS: 'steps'
};

/**
 * Provide the current view.
 * @param {function} component - The component to enhance.
 * @returns {function} - Enhanced component.
 */
export default withStateHandlers(
	{
		view: VIEWS.SEGMENTS
	},
	{
		handleViewChange: () => ({ target }) => ({
			view: target.value
		})
	}
);
