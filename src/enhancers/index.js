import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';
import withView from './withView';
import withQuery from './withQuery';
import withQuerySync from './withQuerySync';
import withStartup from './withStartup';

export default compose(
	withFlask,
	withInvestment,
	withView,
	withQuery,
	withQuerySync,
	withStartup
);
