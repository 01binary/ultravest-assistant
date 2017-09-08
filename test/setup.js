import chai from 'chai';
import assertJsx from 'preact-jsx-chai';
import 'undom/register';
import 'babel-polyfill';

chai.use(assertJsx);
chai.use(assertJsxExtensions);

function assertJsxExtensions({ Assertion }) {
	add(tagName);

	function tagName(expected) {
		const actual = this._obj.nodeName.toLowerCase();
		this.assert(
			actual === expected,
			'expected #{this} to have tag name #{exp} but got #{act}',
			'expected #{this} not to have tag name #{exp} but got #{act}',
			expected,
			actual
		);
	}

	function add(method) {
		Assertion.addMethod(method.name, method);
	}
}
