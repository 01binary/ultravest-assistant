import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Diagram from '../../src/components/Diagram';
import presets from '../../src/config/burnoutPresets';

describe('Diagram', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(
			<Diagram {...props} />
		);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	const first = Object.keys(presets)[0];
	const segments = presets[first].segments;
	const props = { segments };
});
