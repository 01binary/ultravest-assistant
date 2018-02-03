import withState from '../../src/enhancers';
import withFlask from '../../src/enhancers/withFlask';
import withInvestment from '../../src/enhancers/withInvestment';
import withView from '../../src/enhancers/withView';
import withQuery from '../../src/enhancers/withQuery';
import withStartup from '../../src/enhancers/withStartup';
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

	it('should include withQuery', () => {
		includes(withState, withQuery);
	});

	it('should include withStartup', () => {
		includes(withState, withStartup);
	});
});
