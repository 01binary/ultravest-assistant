
import { h } from 'preact';
import Header from '../Header';
import Flask from '../Flask';
import Investment from '../Investment';
import Burnout from '../Burnout';
import Summary from '../Summary';
import Result from '../Result';

const App = (props) => (
	<div id="app">
		<Header />

		<main>
			<Flask {...props} {...props.flask} />
			<Investment {...props} {...props.investment} />
			<Burnout {...props} />

			<Result {...props} />
		</main>

		<aside>
			<Summary {...props} />
		</aside>
	</div>
);

export default App;
