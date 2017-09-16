
import { h } from 'preact';
import Header from '../Header';
import Flask from '../Flask';
import Investment from '../Investment';
import Burnout from '../Burnout';
import Summary from '../Summary';
import './style';

/**
 * Ultravest Assistant App
 * @param {object} props - The composed application state.
 * @returns {function} - A stateless component.
 */
const App = props => (
	<div id="app">
		<Header />

		<main class="two-col-width">
			<Flask {...props} />
			<Investment {...props} />
			<Burnout {...props} />
		</main>

		<aside>
			<Summary {...props} />
		</aside>
	</div>
);

export default App;
