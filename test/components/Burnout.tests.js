//import { expect } from 'chai';
import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Burnout from '../../src/components/Burnout';
import withState from '../../src/composers';

describe('Burnout', () => {

	let wrapper;

	before(() => {
		wrapper = deep(withState(Burnout));
	});

	after(() => {
		wrapper = null;
	});

	it('should render a section with burnout class', () => {
	});

	it('should render a heading', () => {
	});

	it('should render preset label', () => {
	});

	it('should render preset', () => {
	});

	it('should render time label', () => {
	});

	it('should render time', () => {
	});
});
