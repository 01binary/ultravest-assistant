import { withStateHandlers } from 'recompose';

export default withStateHandlers(
	{
		showHelpText: true
	},
	{
		handleShowHelpText: () => () => ({
			showHelpText: false
		})
	}
);
