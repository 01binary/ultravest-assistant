
import { h } from 'preact';
import Header from '../Header';
import Flask from '../Flask';
import Investment from '../Investment';
import Burnout from '../Burnout';
import Summary from '../Summary';

const App = (props) => (
	<div id="app">
		<Header />

		<main>
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
