import { withStateHandlers } from 'recompose';

export const VIEWS = {
	SEGMENTS: 'segments',
	STEPS: 'steps'
};

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
