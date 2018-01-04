
import { h } from 'preact';
import Header from '../Header';
import Flask from '../Flask';
import Investment from '../Investment';
import Burnout from '../Burnout';
import Footer from '../Footer';
import getFlask from '../../selectors/getFlask';
import style from './style';

/**
 * Ultravest Assistant App
 * @param {object} props - The composed application state.
 * @returns {function} - A stateless component.
 */
const App = props => (
	<form id="app" class={style.app}>
		<Header />

		<main>
			<Flask {...getFlask(props)} />
			<Investment {...props} />
			<Burnout {...props} />
		</main>

		<Footer />
	</form>
);

export default App;
