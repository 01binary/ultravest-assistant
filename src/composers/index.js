import { compose } from 'recompose';
import withFlask from './withFlask';
import withInvestment from './withInvestment';

export default compose(withFlask, withInvestment);
