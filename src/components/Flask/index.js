import { h } from 'preact';
import classNames from 'obj-str';
import { CUSTOM } from '../../enhancers/withFlask';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
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
const Flask = ({
	flask,
	handleFlaskPresetChange,
	handleFlaskDiameterChange,
	handleFlaskHeightChange,
	handleAddFlaskPreset,
	handleRemoveFlaskPreset }) => (
	<article class={classNames({
		[style.flask]: true,
		[timelineStyle.timeline]: true
	})}
	>
		<h2>flask</h2>

		<section class={formStyle.group}>
			<section class={classNames({
				[formStyle.control]: true,
				[style.preset]: true
			})}
			>
				<select
					id="flask-preset"
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

				<label for="flask-preset">
					preset
				</label>
			</section>

			<input
				type="submit"
				name="action"
				value="Add flask preset"
				class={classNames({
					[style.action]: true,
					[style.add]: true
				})}
				onClick={handleAddFlaskPreset}
			/>

			<input
				type="submit"
				name="action"
				value="Remove flask preset"
				class={classNames({
					[style.action]: true,
					[style.remove]: true
				})}
				onClick={handleRemoveFlaskPreset}
			/>
		</section>

		<section class={classNames({
			[formStyle.group]: true,
			[style.dimensions]: true
		})}
		>
			<section class={formStyle.control}>
				<input
					id="flask-diameter"
					type="number"
					step="0.1"
					value={flask.diameter}
					onChange={handleFlaskDiameterChange}
				/>
				<label for="flask-diameter">
					diameter
				</label>
				<span>in</span>
			</section>

			<section class={formStyle.control}>
				<input
					id="flask-height"
					type="number"
					step="0.1"
					value={flask.height}
					onChange={handleFlaskHeightChange}
				/>
				<label for="flask-height">
					height
				</label>
				<span>in</span>
			</section>
		</section>
	</article>
);

export default Flask;
