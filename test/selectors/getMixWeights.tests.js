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

	test('calculates mix weights and sorts by component name', () => {
		weights.forEach((calc, index) => {
			expect(calc.grams)
				.toEqual(mix[index].grams);
			expect(calc.component)
				.toEqual(mix[index].component);
		});
	});

	const preset = {
		investment: 21.0,
		water: 8.0,
		default: true
	};

	const flask = {
		diameter: 4,
		height: 3
	};

	const volume = getFlaskVolume(flask);

	const investment = {
		preset: 'preset',
		presets: { preset }
	};

	const mix = [
		{
			component: 'investment',
			grams: Math.round(volume * preset.investment)
		},
		{
			component: 'water',
			grams: Math.round(volume * preset.water)
		}
	];
});
