import { h } from 'preact';
import { expect } from 'chai';
import Component from '../fixtures/Component';
import withFlask from '../../src/state/withFlask';

describe('state withFlask', () => {

	let testing = withFlask(Component);

	global.console.log('testing is', (<testing />));

	it('initializes with default state', () => {
		expect(<div id="1">a</div>).to.eql(<div id="1">a</div>);
	});
});
