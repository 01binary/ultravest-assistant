import { expect } from 'chai';
import reflect from '../fixtures/reflector.tests.fixture';
import withState from '../../src/composers';
import withFlask from '../../src/composers/withFlask';
import withInvestment from '../../src/composers/withInvestment';

describe('composed state', () => {

	it('should include withFlask', () => {
		includes(withState, withFlask);
	});

	it('should include withInvestment', () => {
		includes(withState, withInvestment);
	});

	function includes(composition, composer) {
		const props = Object.keys(reflect(composition).props);

		Object.keys(reflect(composer).props).map((prop) => {
			expect(props).to.have.key(prop);
		});
	}
});
