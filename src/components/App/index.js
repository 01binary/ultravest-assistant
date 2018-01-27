import { h } from 'preact';
import Header from '../Header';
import Footer from '../Footer';
import Flask from '../Flask';
import Investment from '../Investment';
import Burnout from '../Burnout';
import { app as appStyle } from './style';

/**
 * Ultravest Assistant App
 * @param {Object} props - The composed application state.
 * @returns {function} - A stateless component.
 */
const App = props => (
	<form id="app" class={appStyle}>
		<Header />

		<main>
			<Flask {...props} />
			<Investment {...props} />
			<Burnout {...props} />
		</main>

		<Footer />
	</form>
);

export default App;
