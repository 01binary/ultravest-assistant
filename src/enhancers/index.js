import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';
import withView from './withView';

export default compose(
	withFlask,
	withInvestment,
	withView
);
