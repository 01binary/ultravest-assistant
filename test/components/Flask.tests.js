import { h } from 'preact';
import { deep } from 'preact-render-spy';
import withFlask from '../../src/composers/withFlask';
import Flask from '../../src/components/Flask';

describe('Flask', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(withFlask(<Flask />));
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
	});
});
