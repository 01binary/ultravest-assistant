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
	// expect(x).to.have.parent(name || component, [because])
	add(parent);

	/**
	 * Assert expected VDom node(s) tag name.
	 * @param {string} expected - The expected tag name.
	 * @param {string} message - The optional assert message.
	 */
	function tagName(expected, message) {
		if (Array.isArray(this._obj)) {
			this._obj.forEach(subject => tagNameFor(subject, expected, message));
		}
		else {
			tagNameFor(this._obj, expected, message);
		}
	}

	/**
	 * Assert expected VDom single node tag name.
	 * @param {object} subject - The assertion subject.
	 * @param {string} expected - The expected tag name.
	 * @param {string} message - The optional assert message.
	 */
	function tagNameFor(subject, expected, message) {
		const actual = subject.nodeName.toLowerCase();

		this.assert(
			actual === expected,
			message || 'expected #{this} to have tag name #{exp} but got #{act}',
			message || 'expected #{this} not to have tag name #{exp} but got #{act}',
			expected,
			actual
		);
	}

	/**
	 * Assert expected VDom node(s) parent.
	 * @param {string} expected - The expected tag name.
	 * @param {string} message - The optional assert message.
	 */
	function parent(expected, message) {
		if (Array.isArray(this._obj)) {
			this._obj.forEach(subject => parentFor(subject, expected, message));
		}
		else {
			parentFor(this._obj, expected, message);
		}
	}

	/**
	 * Assert expected VDom single node parent.
	 * @param {object} subject - The assertion subject.
	 * @param {string} expected - The expected tag name.
	 * @param {string} message - The optional assert message.
	 */
	function parentFor(subject, expected, message) {
		this.assert(
			this._obj.parentNode,
			message || 'expected #{this} to have parent',
			message || 'expected ${this} not to have parent'
		);

		if (typeof expected === 'function') {
			// expected parent component
			const actual = this._obj.parentNode._componentConstructor;

			this.assert(
				actual === expected,
				message || 'expected #{this} to have parent component #{exp} but got #{act}',
				message || 'expected #{this} not to have parent component #{exp} but got #{act}',
				expected.name,
				actual.name
			);
		}
		else {
			// expected parent tag name
			const actual = this._obj.parentNode.nodeName.toLowerCase();
			
			this.assert(
				actual === expected,
				message || 'expected #{this} to have parent tag #{exp} but got #{act}',
				message || 'expected #{this} not to have parent tag #{exp} but got #{act}',
				expected,
				actual
			);
		}
	}

	/**
	 * Assert expected VDom node(s) attribute.
	 * @param {string} name - The expected attribute name.
	 * @param {string} value - The expected attribute value (optional).
	 * @param {string} message - The optional assert message.
	 */
	function attribute(name, value, message) {
		if (Array.isArray(this._obj)) {
			this._obj.forEach(subject => attributeFor(subject, name, value, message));
		}
		else {
			attributeFor(this._obj, name, value, message);
		}
	}

	/**
	 * Assert expected VDom single node attribute.
	 * @param {object} subject - The assertion subject.
	 * @param {string} name - The expected attribute name.
	 * @param {string} value - The expected attribute value (optional).
	 * @param {string} message - The optional assert message.
	 */
	function attributeFor(subject, name, value, message) {
		const match = subject.attributes.filter(attribute =>
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
