import getMixWeights from '../../src/selectors/getMixWeights';
import getFlaskVolume from '../../src/selectors/getFlaskVolume';

describe('selector getMixWeights', () => {

	it('calculates mix weights', () => {
		getMixWeights({ flask, investment }).forEach((calc, index) => {
			expect(calc.grams)
				.toEqual(mix[index].grams);
			expect(calc.component)
				.toEqual(mix[index].component);
		});
	});

	it('sorts by component name', () => {
		getMixWeights({
			flask,
			investment: unsortedInvestment
		}).forEach((calc, index) => {
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

	const unsortedPreset = {
		water: 8.0,
		investment: 21.0
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

	const unsortedInvestment = {
		preset: 'unsortedPreset',
		presets: { unsortedPreset }
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
