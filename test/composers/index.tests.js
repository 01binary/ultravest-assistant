import withState from '../../src/composers';
import withFlask from '../../src/composers/withFlask';
import withInvestment from '../../src/composers/withInvestment';
import includes from '../fixtures/composer.tests.fixture';

describe('composed state', () => {

	test('should include withFlask', () => {
		includes(withState, withFlask);
	});

	test('should include withInvestment', () => {
		includes(withState, withInvestment);
	});
});
