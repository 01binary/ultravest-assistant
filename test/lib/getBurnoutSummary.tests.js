import { expect } from 'chai';
import getBurnoutSummary from '../../src/lib/getBurnoutSummary';

describe('getBurnoutSummary', () => {

	it('formats summary with a valid preset', () => {
		expect(getBurnoutSummary({
			flask: {
				diameter: 2,
				height: 3
			}
		})).to.equal('3 X 3, 8 hours');
	});
});
