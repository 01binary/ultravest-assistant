import withState from '../../src/composers';
import withFlask from '../../src/composers/withFlask';
import withInvestment from '../../src/composers/withInvestment';
import includes from '../fixtures/composer.tests.fixture';

describe('composed state', () => {

	it('should include withFlask', () => {
		includes(withState, withFlask);
	});

	it('should include withInvestment', () => {
		includes(withState, withInvestment);
	});
});
