import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Burnout from '../../src/components/Burnout';
import withState from '../../src/composers';

describe('Burnout', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(withState(Burnout));
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render a section with burnout class', () => {
	});

	test('should render a heading', () => {
	});

	test('should render preset label', () => {
	});

	test('should render preset', () => {
	});

	test('should render time label', () => {
	});

	test('should render time', () => {
	});
});
