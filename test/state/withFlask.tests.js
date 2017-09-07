//import { expect } from 'chai';
import { h } from 'preact';
import withFlask from '../../src/lib/withFlask';
import Component from '../fixtures/Component';

describe('state withFlask', () => {

	let ComponentWithFlask = null;

	before(() => {
		ComponentWithFlask = withFlask(Component)();
	});

	after(() => {
		ComponentWithFlask = null;
	});

	it('initializes with default state', () => {
		global.console.log(<ComponentWithFlask />);
	});
});
