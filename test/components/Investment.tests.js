import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Investment from '../../src/components/Investment';

describe('Investment', () => {

	let wrapper, props;

	beforeAll(() => {
		props = {
			investment: {
				preset: expectedName,
				presets: {
					[expectedName]: expected
				}
			},
			flask: {
				preset: 'another preset',
				presets: {
					'another preset': {
						diameter: 4,
						height: 6
					}
				},
				diameter: 4,
				height: 6
			},
			handleInvestmentPresetChange: jest.fn()
		};

		wrapper = deep(
			<Investment {...props} />
		);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should bind preset value', () => {
		expect(wrapper.find('.investmentRatio')[0].attributes.value)
			.toBe(expectedName);
	});

	test('should bind change preset handler', () => {
		wrapper.find('.investmentRatio')[0].attributes.onChange();
		expect(props.handleInvestmentPresetChange.mock.calls.length)
			.toBe(1);
	});

	const expectedName = 'test preset';
	const expected = {
		investment: 2.1,
		water: 3.5
	};
});
