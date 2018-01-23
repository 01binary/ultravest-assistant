import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { Flask } from '../../src/components/Flask';

describe('Flask', () => {

	let wrapper, props;

	beforeAll(() => {
		props = {
			query: {},
			preset: expectedName,
			presets: {
				[expectedName]: expected,
				'another preset': {
					diameter: 4,
					height: 6
				}
			},
			diameter: expected.diameter,
			height: expected.height,
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

	it('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should bind preset value', () => {
		const first = wrapper.find('option')[0];
		expect(first.children[0]).toBe(expectedName);
		expect(first.attributes.selected).toBe(true);
	});

	it('should bind diameter', () => {
		expect(wrapper.find('#flask-diameter')[0].attributes.value)
			.toBe(expected.diameter);
	});

	it('should bind height', () => {
		expect(wrapper.find('#flask-height')[0].attributes.value)
			.toBe(expected.height);
	});

	it('should bind change preset handler', () => {
		wrapper.find('#flask-preset')[0].attributes.onChange();
		expect(props.handleFlaskPresetChange.mock.calls.length)
			.toBe(1);
	});

	it('should bind change diameter handler', () => {
		wrapper.find('#flask-diameter')[0].attributes.onChange();
		expect(props.handleFlaskDiameterChange.mock.calls.length)
			.toBe(1);
	});

	it('should bind change height handler', () => {
		wrapper.find('#flask-height')[0].attributes.onChange();
		expect(props.handleFlaskHeightChange.mock.calls.length)
			.toBe(1);
	});

	it('should bind add preset handler', () => {
		wrapper.find('#action-add')[0].attributes.onClick();
		expect(props.handleAddFlaskPreset.mock.calls.length)
			.toBe(1);
	});

	it('should bind remove preset handler', () => {
		wrapper.find('#action-remove')[0].attributes.onClick();
		expect(props.handleRemoveFlaskPreset.mock.calls.length)
			.toBe(1);
	});

	const expectedName = 'test preset';
	const expected = {
		diameter: 2,
		height: 3
	};
});
