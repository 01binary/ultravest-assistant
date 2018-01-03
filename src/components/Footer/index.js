import { h } from 'preact';
import './style';

/**
 * Application header with repository link
 * @returns {JSX.Element} - A stateless component.
 */
const Footer = () => (
	<footer>
		<a
			href="https://github.com/01binary/ultravest-assistant"
			target="_blank"
			rel="noopener noreferrer"
		>
			fork on <strong>GitHub</strong>
		</a>
	</footer>
);

export default Footer;
