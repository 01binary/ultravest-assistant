import { h } from 'preact';
import classNames from 'obj-str';
import { CUSTOM } from '../../enhancers/withFlask';
import Units from '../Units';
import getDecoratedFlaskPreset from '../../selectors/getDecoratedFlaskPreset';
import withFlaskOrQuery from '../../enhancers/withFlaskOrQuery';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import style from './style';

/**
 * Flask parameters
 * @param {Object[]} presets - The flask presets provided by App.
 * @param {string} preset - The flask preset provided by App.
 * @param {number} diameter - The flask diameter provided by App.
 * @param {number} height - The flask height provided by App.
 * @param {function} handleFlaskPresetChange - The flask preset handler provided by withFlask.
 * @param {function} handleFlaskDiameterChange - The flask diameter handler provided by withFlask.
 * @param {function} handleFlaskHeightChange - The flask height handler provided by withFlask.
 * @param {function} handleAddFlaskPreset - The flask preset add handler provided by withFlask.
 * @param {function} handleRemoveFlaskPreset - The flask preset remove handler provided by withFlask.
 * @returns {JSX.Element} - A React stateless component.
 */
export const Flask = ({
	presets,
	preset,
	diameter,
	height,
	handleFlaskPresetChange,
	handleFlaskDiameterChange,
	handleFlaskHeightChange,
	handleAddFlaskPreset,
	handleRemoveFlaskPreset }) => (
	<article class={classNames({
		[timelineStyle.timeline]: true,
		[style.flask]: true
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
					name="flask-preset"
					onChange={handleFlaskPresetChange}
					autofocus
				>
					{ Object.keys(presets).map(name => (
						<option selected={name === preset}>
							{getDecoratedFlaskPreset(name)}
						</option>
					))}

					<option selected={name === CUSTOM}>
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
				id="action-add"
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
				id="action-remove"
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
					name="flask-diameter"
					type="number"
					step="0.1"
					value={diameter}
					onChange={handleFlaskDiameterChange}
				/>
				<label for="flask-diameter">
					diameter
				</label>
				<Units alt="inches">
					in
				</Units>
			</section>

			<section class={formStyle.control}>
				<input
					id="flask-height"
					name="flask-height"
					type="number"
					step="0.1"
					value={height}
					onChange={handleFlaskHeightChange}
				/>
				<label for="flask-height">
					height
				</label>
				<Units alt="inches">
					in
				</Units>
			</section>
		</section>
	</article>
);

export default withFlaskOrQuery(Flask);
