import { h, render } from 'preact';

/**
 * Create a component reflecting its own props and state.
 * @param {function} reflect - The function called with own state and props on render.
 * @returns {function} - The component factory.
 */
const reflector = (reflect) => (props, state) => (
	reflect(props, state) || null
);

/**
 * Create a reflector enhanced with the given Higher Order Component (HOC).
 * @param {function} hoc - The Higher Order Component to reflect.
 * @param {function} reflect - The function called with props and state provided by the HOC.
 * @returns {function} - A preact component factory.
 */
const enhancer = (hoc, reflect) => (
	hoc(reflector(reflect))
);

/**
 * Reflect props and state provided by a Higher Order Component.
 * @param {hoc} - The Higher Order Component to reflect.
 * @description
 *  Reflected props and state are availble on .props and .state, respectively.
 *  The reflected instance is available on .element.
 */
class Wrapper {
	constructor(hoc) {
		if (typeof hoc !== 'function') {
			throw new Error('invalid higher order component passed to reflect Wrapper:', hoc);
		}

		const factory = enhancer(hoc, (props, state) => {
			this.props = props;
			this.state = state;

			if (this.callback) {
				this.callback(props, state);
			}
		});

		this.element = h(factory);
		this.callback = null;

		render(this.element, global.document);
	}

	update(callback) {
		this.callback = callback;
	}
}

export default (hoc) => new Wrapper(hoc);
