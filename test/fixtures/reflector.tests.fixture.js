import { h, render } from 'preact';

const Reflector = (spy) => (props, state) => (
	spy(props, state) || null
);

const Enhancer = (hoc, spy) => (
	hoc(Reflector(spy))
);

class Wrapper {
	constructor(hoc) {
		let Component = Enhancer(hoc, (props, state) => {
			console.log('setting this.props.flask to', props.flask);
			this.props = props;
			this.state = state;
		});

		render(h(Component), document);
	}
}

export default Wrapper;
