import { h } from 'preact';
import style from './style';

/**
 * Flask Parameters.
 * @param {number} props.flask - The flask props.
 * @param {func} props.handleFlaskPresetChange - The function called to set flask preset.
 * @param {func} props.handleFlaskDiameterChange - The function called to set flask diameter.
 * @param {func} props.handleFlaskHeightChange - The function called to set flask height.
 * @returns {JSX.Element} - A React stateless component.
 */
const Flask = (
	{
		flask,
		handleFlaskPresetChange,
		handleFlaskDiameterChange,
		handleFlaskHeightChange
	}) => (

	<article class={style.flask}>
		<h2>Flask</h2>

		<label for="flask-preset">
			Preset
		</label>

		<select
			name="flask-preset"
			value={flask.preset}
			onChange={handleFlaskPresetChange}
		>
			{ Object.keys(flask.presets).map(preset => (
				<option selected={preset === flask.preset}>
					{preset}
				</option>
			))}
		</select>

		<label for="flask-diameter">Diameter (in)</label>
		<input
			name="flask-diameter"
			type="number"
			value={flask.diameter}
			onChange={handleFlaskDiameterChange}
		/>

		<label for="flask-height">Height (in)</label>
		<input
			name="flask-height"
			type="number"
			value={flask.height}
			onChange={handleFlaskHeightChange}
		/>
	</article>
);

export default Flask;
