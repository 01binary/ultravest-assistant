import { h } from 'preact';
import Result from '../Result';
import './style';

const Header = props => (
	<header class="full-width">
		<h1>UltraVest Assistant</h1>

		<Result {...props} />
	</header>
);

export default Header;
