import getMixWeights from '../../src/selectors/getMixWeights';
import getFlaskVolume from '../../src/selectors/getFlaskVolume';

describe('selector getMixWeights', () => {

	let weights;

	beforeAll(() => {
		weights = getMixWeights({ flask, investment });
	});

	afterAll(() => {
		weights = null;
	});

	test('calculates investment mix weight', () => {
		expect(weights.water).toBeCloseTo(volume * mix.water);
	});
	
	test('calculates water mix weight', () => {
		expect(weights.investment).toBeCloseTo(volume * mix.investment);
	});

	const mix = {
		water: 10,
		investment: 20
	};

	const flask = {
		diameter: 4,
		height: 3
	};

	const investment = {
		preset: 'mix',
		presets: { mix }
	};

	const volume = getFlaskVolume(flask);
});
