import { h, Component } from 'preact';

export default class TestComponent extends Component {
	componentDidMount() {
		global.console.log('TestComponent did mount');
		if (this.props.listen) {
			this.props.listen(this.props, this.state);
		}
	}

	render() {
		return (
			<div>
				Test Component
			</div>
		);
	}
}
