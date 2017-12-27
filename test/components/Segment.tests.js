/*import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Segment from '../../src/components/Segment';
import presets from '../../src/config/burnoutPresets';

describe('Segment', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(
			<Segment {...props} />
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
	const cur = segments[1];
	const prev = segments[0];
	const props = Object.assign({}, cur, { prev });
});
*/