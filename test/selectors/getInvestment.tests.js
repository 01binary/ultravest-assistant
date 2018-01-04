import getInvestment from '../../src/selectors/getInvestment';

describe('selector getInvestment', () => {

	it('maps investment props', () => {
		const props = {
			query: {},
			investment,
			handleInvestmentPresetChange: jest.fn()
		};

		expect(getInvestment(props)).toEqual({
			presets: props.investment.presets,
			preset: props.investment.preset,
			handleInvestmentPresetChange: props.handleInvestmentPresetChange
		});
	});

	it('supports query overrides', () => {
		const props = {
			query: {
				investment: {
					presets: overridePresets,
					preset: overridePreset
				}
			},
			investment,
			handleInvestmentPresetChange: jest.fn()
		};

		expect(getInvestment(props)).toEqual({
			presets: overridePresets,
			preset: overridePreset,
			handleInvestmentPresetChange: props.handleInvestmentPresetChange
		});
	});

	const investment = {
		presets: {
			first: {
				investment: 10.5,
				water: 5.5,
				default: true
			}
		},
		preset: 'first',
		diameter: 4,
		height: 8
	};
	const overridePreset = 'another';
	const overridePresets = {
		another: {
			investment: 3.0,
			water: 5.5,
			default: true
		},
		more: {
			investment: 1.0,
			water: 2.5
		}
	};
});
