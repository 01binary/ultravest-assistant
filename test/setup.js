import chai from 'chai';
import assertJsx from 'preact-jsx-chai';
import 'undom/register';
import 'babel-polyfill';

chai.use(assertJsx);
chai.use(assertJsxExtensions);

function assertJsxExtensions({ Assertion }) {
	// expect(x).to.have.tagName(name, [because])
	add(tagName);
	// expect(x).to.have.attribute(name, [value], [because])
	add(attribute);

	/**
	 * Assert expected VDom node tag name.
	 * @param {string} expected - The expected tag name.
	 * @param {string} message - The optional assert message.
	 */
	function tagName(expected, message) {
		const actual = this._obj.nodeName.toLowerCase();

		this.assert(
			actual === expected,
			message || 'expected #{this} to have tag name #{exp} but got #{act}',
			message || 'expected #{this} not to have tag name #{exp} but got #{act}',
			expected,
			actual
		);
	}

	/**
	 * Assert expected VDom attribute.
	 * @param {string} name - The expected attribute name.
	 * @param {string} value - The expected attribute value (optional).
	 * @param {string} message - The optional assert message.
	 */
	function attribute(name, value, message) {
		const match = this._obj.attributes.filter(attribute =>
			attribute.name.toLowerCase() === name
		)[0];

		if (value) {
			// assert that attribute has value
			const result = match ? ` but found '${match.value}'` : '';
			
			this.assert(
				match && match.value === value,
				message || `expected #{this} to have attribute '${name}' of '${value}'${result}`,
				message || `expected #{this} not to have attribute '${name}' of '${value}'${result}`,
			);
		}
		else {
			// assert that attribute exists
			this.assert(
				match,
				message || `expected #{this} to have attribute '${name}'`,
				message || `expected #{this} to not have attribute '${name}'`
			);
		}
	}

	/**
	 * Register assertion method - expect(x).to.have.<method name>
	 * @param {function} method - The extension method to register.
	 */
	function add(method) {
		Assertion.addMethod(method.name, method);
	}
}
