import { expect } from 'chai';
import getBurnoutPreset from '../../src/lib/getBurnoutPreset';

describe('getBurnoutPreset', () => {

	it('returns the shortest preset for flask size', () => {
		expect(getBurnoutPreset(
			[
				{
					diameter: 2,
					height: 2
				},
				{
					diameter: 3,
					height: 3
				},
				{
					diameter: 3,
					height: 5
				},
				{
					diameter: 3,
					height: 6
				}
			],
			{
				// requested 3 X 4
				diameter: 3,
				height: 4
			}
		)).to.eql({
			// smallest available  3 X 5 (next is 3 X 6)
			diameter: 3,
			height: 5
		});
	});

	it('returns the longest preset if flask size exceeds preset with largest flask size', () => {
		expect(getBurnoutPreset(
			[
				{
					diameter: 3,
					height: 3
				},
				{
					diameter: 5,
					height: 10
				},
				{
					diameter: 10,
					height: 5
				},
				{
					diameter: 10,
					height: 8
				}
			],
			{
				// requesting 10 X 10
				diameter: 10,
				height: 10
			}
		)).to.eql({
			// largest available 10 X 8
			diameter: 10,
			height: 8
		});
	});
});
