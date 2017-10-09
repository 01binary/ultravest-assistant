import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Flask from '../../src/components/Flask';

describe('Flask', () => {

	let wrapper, props;

	beforeAll(() => {
		props = {
			flask: {
				preset: 'test preset',
				presets: {
					'test preset': {
						diameter: 2,
						height: 3
					},
					'another preset': {
						diameter: 4,
						height: 6
					}
				},
				diameter: 2,
				height: 3
			},
			handleFlaskPresetChange: jest.fn(),
			handleFlaskDiameterChange: jest.fn(),
			handleFlaskHeightChange: jest.fn(),
			handleAddFlaskPreset: jest.fn(),
			handleRemoveFlaskPreset: jest.fn()
		};

		wrapper = deep(
			<Flask {...props} />
		);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should bind change preset handler', () => {
		wrapper.find('.flaskPreset')[0].attributes.onChange();
		expect(props.handleFlaskPresetChange.mock.calls.length)
			.toBe(1);
	});

	test('should bind change diameter handler', () => {
		wrapper.find('.flaskDiameter')[0].attributes.onChange();
		expect(props.handleFlaskDiameterChange.mock.calls.length)
			.toBe(1);
	});

	test('should bind change height handler', () => {
		wrapper.find('.flaskHeight')[0].attributes.onChange();
		expect(props.handleFlaskHeightChange.mock.calls.length)
			.toBe(1);
	});

	test('should bind add preset handler', () => {
		wrapper.find('.actionAdd')[0].attributes.onClick();
		expect(props.handleAddFlaskPreset.mock.calls.length)
			.toBe(1);
	});

	test('should bind remove preset handler', () => {
		wrapper.find('.actionRemove')[0].attributes.onClick();
		expect(props.handleRemoveFlaskPreset.mock.calls.length)
			.toBe(1);
	});
});
