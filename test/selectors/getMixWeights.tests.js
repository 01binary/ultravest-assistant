import getMixWeights from '../../src/selectors/getMixWeights';

describe('selector getMixWeights', () => {

	test('calculates mix weights', () => {
		expect(getMixWeights({
			water: .4,
			investment: .2
		}, 100)).toEqual({
			water: 40,
			investment: 20
		});
	});
});
