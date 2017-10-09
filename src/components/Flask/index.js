import { h } from 'preact';
import { CUSTOM_PRESET } from '../../enhancers/withFlask';
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
		<h2>flask</h2>

		<label for="flask-preset">
			preset
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

			<option selected={flask.preset === CUSTOM_PRESET}>
				custom
			</option>
		</select>

		<label for="flask-diameter">
			diameter
			<input
				name="flask-diameter"
				type="number"
				step="0.1"
				value={flask.diameter}
				onChange={handleFlaskDiameterChange}
			/>
		</label>

		<label for="flask-height">
			height
			<input
				name="flask-height"
				type="number"
				step="0.1"
				value={flask.height}
				onChange={handleFlaskHeightChange}
			/>
		</label>
	</article>
);

export default Flask;
