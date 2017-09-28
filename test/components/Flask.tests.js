import { h } from 'preact';
import { deep } from 'preact-render-spy';
import withFlask from '../../src/enhancers/withFlask';
import Flask from '../../src/components/Flask';

describe('Flask', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(h(withFlask(Flask)));
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
