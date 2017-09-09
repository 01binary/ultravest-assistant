import { h } from 'preact';
import style from './style';

/**
 * Flask Parameters.
 * @param {number} props.flask.diameter - The flask diameter.
 * @param {number} props.flask.height - The flask height.
 * @param {string} props.flask.preset - The flask preset.
 * @param {func} props.setFlaskPreset - The function called to set flask preset.
 * @param {func} props.setDiameter - The function called to set flask diameter.
 * @param {func} props.setHeight - The function called to set flask height.
 * @returns {JSX.Element} - A React stateless component.
 */
const Flask = (props) => (
	<section class={style.flask}>
		<h2>Flask</h2>

		<label for="flask-diameter">Diameter (in)</label>
		<input
			name="flask-diameter"
			type="number"
			value={props.diameter}
			onChange={props.setFlaskDiameter}
		/>

		<label for="flask-height">Height (in)</label>
		<input
			name="flask-height"
			type="number"
			value={props.height}
			onChange={props.setFlaskHeight}
		/>
	</section>
);

export default Flask;
