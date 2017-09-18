import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';
import withHelpText from './withHelpText';

export default compose(
	withFlask,
	withInvestment,
	withHelpText
);
