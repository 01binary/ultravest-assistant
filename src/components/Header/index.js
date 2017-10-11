import { h } from 'preact';
import './style';

/**
 * Application header with main actions.
 * @returns {JSX.Element} - A stateless component.
 */
const Header = () => (
	<header>
		<h1>
			UltraVest <span>assistant</span>
		</h1>

		<p><strong>Calculate</strong> materials and burnout program for your project.</p>
		<p>Bookmark or <strong>share</strong> via permalink.</p>

		<input type="submit" name="action" value="Share" />

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
