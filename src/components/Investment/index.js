import { h } from 'preact';
import classNames from 'obj-str';
import Units from '../Units';
import getMixWeights from '../../selectors/getMixWeights';
import withInvestmentOrQuery from '../../enhancers/withInvestmentOrQuery';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import calcStyle from '../App/style/calc';
import style from './style';

/**
 * Investment parameters
 * @param {Object} flask - The flask props provided by withFlask.
 * @param {string} preset - The investment preset provided by withInvestment.
 * @param {Object[]} presets - The investment presets provided by withInvestment.
 * @param {function} handleInvestmentPresetChange - The handler provided by withInvestment.
 * @returns {JSX.Element} - A React stateless component.
 */
export const Investment = ({
	preset,
	presets,
	flask,
	handleInvestmentPresetChange }) => (
	<article class={classNames({
		[timelineStyle.timeline]: true,
		[style.investment]: true
	})}
	>
		<h2>investment</h2>

		<section class={formStyle.group}>
			<section class={formStyle.control}>
				<select
					id="investment-preset"
					name="investment-preset"
					onChange={handleInvestmentPresetChange}
				>
					{ Object.keys(presets).map(preset => (
						<option selected={preset === preset}>
							{preset}
						</option>
					))}
				</select>
				<label for="investment-preset">
					ratio
				</label>
			</section>
		</section>

		<output class={classNames({
			[formStyle.group]: true,
			[calcStyle.calc]: true
		})}
		>
			{ getMixWeights(flask, preset, presets).map(mix => (
				<dl class={formStyle.control}>
					<dt>{mix.component}</dt>
					<dd>
						{mix.grams}
						<Units alt="grams">g</Units>
					</dd>
				</dl>
			))}
		</output>
	</article>
);

export default withInvestmentOrQuery(Investment);
