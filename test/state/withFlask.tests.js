//import { h } from 'preact';
//import { expect } from 'chai';
import TestComponent from '../fixtures/TestComponent';
import { h } from 'preact';
import withFlask from '../../src/state/withFlask';

describe('state withFlask', () => {

	let props, state;

	before(() => {
		console.log('about to mount enhanced');
		let Enhanced = withFlask(TestComponent);
		<Enhanced listen={setter} />;
	});

	after(() => {
		props = null;
		state = null;
	});

	it('initializes with default state', () => {
		global.console.log('props is', props, 'state is ', state);
	});

	function setter(hocProps, hocState) {
		props = hocProps;
		state = hocState;
	}
});
