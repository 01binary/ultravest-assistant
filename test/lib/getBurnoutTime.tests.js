import { expect } from 'chai';
import getBurnoutTime from '../../src/lib/getBurnoutTime';

describe('getBurnoutTime', () => {

	it('returns 0 with no segments', () => {
		expect(getBurnoutTime({
			schedule: []
		})).to.equal(0);
	});

	it('sums segment increments', () => {
		expect(getBurnoutTime({
			schedule: [
				
			]
		})).to.equal(0);
	});
});
