import { h } from 'preact';
import { CUSTOM } from '../../enhancers/withFlask';
import style from './style';

/**
 * Flask Parameters.
 * @param {number} flask - The flask props.
 * @param {func} handleFlaskPresetChange - Handle changing flask preset.
 * @param {func} handleFlaskDiameterChange - Handle changing flask diameter.
 * @param {func} handleFlaskHeightChange - Handle changing flask height.
 * @param {func} handleAddFlaskPreset - Handle adding current flask diameter and height as preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Flask = (
	{
		flask,
		handleFlaskPresetChange,
		handleFlaskDiameterChange,
		handleFlaskHeightChange,
		handleAddFlaskPreset,
		handleRemoveFlaskPreset
	}) => (

	<article class={style.flask}>
		<h2>flask</h2>

		<label for="flask-preset">
			preset
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

				<option selected={flask.preset === CUSTOM}>
					custom
				</option>
			</select>

			<input
				type="submit"
				name="action"
				value="Add flask preset"
				onClick={handleAddFlaskPreset}
			/>

			<input
				type="submit"
				name="action"
				value="Remove flask preset"
				onClick={handleRemoveFlaskPreset}
			/>
		</label>

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
