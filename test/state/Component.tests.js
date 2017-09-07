import { h } from 'preact'; /** @jsx h */
import chai, { expect } from 'chai';

// below two lines already appear in ../index.js, repeated here just in case
import assertJsx from 'preact-jsx-chai';
chai.use(assertJsx);

describe('any suite that uses JSX', () => {

	it('any test that uses JSX', () => {
		// following taken from preact-jsx-chai readme
		expect(<div id="1">a</div>).to.eql(<div id="1">a</div>);
	});
});
