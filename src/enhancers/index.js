import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';
import withView from './withView';
import withQuery from './withQuery';
import withStartup from './withStartup';
import withHistory from './withHistory';

export default compose(
	withFlask,
	withInvestment,
	withView,
	withQuery,
	withStartup,
	withHistory
);
