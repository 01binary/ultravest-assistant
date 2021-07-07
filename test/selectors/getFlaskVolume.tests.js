import getFlaskVolume from '../../src/selectors/getFlaskVolume';

describe('selector getFlaskVolume', () => {

	it('calculates flask volume', () => {
		expect(getFlaskVolume({
			diameter: 4,
			height: 8
		})).toBeCloseTo(100.53, 2);
	});
});
