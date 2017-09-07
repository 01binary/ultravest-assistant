import { expect } from 'chai';
import getBurnoutTime from '../../src/lib/getBurnoutTime';

describe('selector getBurnoutTime', () => {

	it('calculates 0 with no segments', () => {
		expect(getBurnoutTime({
			schedule: []
		})).to.equal(0);
	});

	it('calculates burnout time for a single segment', () => {
		expect(getBurnoutTime({
			schedule: [
				// 100 / 100 + 1 = 2
				{
					rate: 100,
					temp: 100,
					hold: 1
				}
			]
		})).to.equal(2);
	});

	it('calculates burnout time for multiple segments', () => {
		expect(getBurnoutTime({
			schedule: [
				// 100/100 + 1 = 2
				{
					rate: 100,
					temp: 100,
					hold: 1
				},
				// (300 - 100) / 200 + 2 = 3
				{
					rate: 200,
					temp: 300,
					hold: 2
				},
				// (500 - 300) / 100 + 3 = 5
				{
					rate: 100,
					temp: 500,
					hold: 3
				}
				// 2 + 3 + 5 = 10
			]
		})).to.equal(10);
	});
});
