import { h } from 'preact';
import './style';

const Header = props => (
	<header>
		<h1>
			UltraVest
			<span>Assistant</span>
		</h1>

		<p><strong>Calculate</strong> materials and burnout program for your project.</p>
		<p>Bookmark or <strong>share</strong> via permalink.</p>

		<input type="submit" value="Share" />

		<a
			href="https://github.com/01binary/ultravest-assistant/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Fork
		</a>
	</header>
);

export default Header;
