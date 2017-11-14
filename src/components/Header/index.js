import { h } from 'preact';
import Helmet from 'preact-helmet';
import style from './style';

/**
 * Application header with main actions.
 * @returns {JSX.Element} - A stateless component.
 */
const Header = () => (
	<header>
		<Helmet
			script={[
				// Two script tags to load Soleil from TypeKit
				{ src: 'https://use.typekit.net/jul4kqo.js' },
				{ innerHTML: 'try{Typekit.load({ async: true });}catch(e){}' }
			]}
		/>

		<div class={style.wrapper}>
			<h1>
				UltraVest <span>assistant</span>
			</h1>

			<p><strong>Calculate</strong> materials and burnout program for your project.</p>
			<p>Bookmark or <strong>share</strong> via permalink.</p>

			<input
				class={style.share}
				type="submit"
				name="action"
				value="Share"
			/>
		</div>
	</header>
);

export default Header;
