import withState from '../../src/enhancers';
import withFlask from '../../src/enhancers/withFlask';
import withInvestment from '../../src/enhancers/withInvestment';
import withView from '../../src/enhancers/withView';
import includes from '../fixtures/composer.tests.fixture';

describe('composed state', () => {

	it('should include withFlask', () => {
		includes(withState, withFlask);
	});

	it('should include withInvestment', () => {
		includes(withState, withInvestment);
	});

	it('should include withView', () => {
		includes(withState, withView);
	});
});
