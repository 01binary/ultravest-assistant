import withState from '../../src/enhancers';
import withFlask from '../../src/enhancers/withFlask';
import withInvestment from '../../src/enhancers/withInvestment';
import withHelpText from '../../src/enhancers/withHelpText';
import includes from '../fixtures/composer.tests.fixture';

describe('composed state', () => {

	test('should include withFlask', () => {
		includes(withState, withFlask);
	});

	test('should include withInvestment', () => {
		includes(withState, withInvestment);
	});

	test('should include withHelpText', () => {
		includes(withState, withHelpText);
	});
});
