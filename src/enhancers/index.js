import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';
import withView from './withView';
import withQuery from './withQuery';

export default compose(
	withFlask,
	withInvestment,
	withView,
	withQuery
);
