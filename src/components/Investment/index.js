import { h } from 'preact';
import classNames from 'obj-str';
import getMixWeights from '../../selectors/getMixWeights';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import calcStyle from '../App/style/calc';
import style from './style';

/**
 * Investment Parameters
 * @param {object} flask - The flask props.
 * @param {object} investment - The investment props.
 * @param {function} setInvestmentPreset - The function called to set investment ratio preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Investment = ({
	flask,
	investment,
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
					id="investment-ratio"
					name="investment-ratio"
					value={investment.preset}
					onChange={handleInvestmentPresetChange}
				>
					{ Object.keys(investment.presets).map(preset => (
						<option selected={preset === investment.preset}>
							{preset}
						</option>
					))}
				</select>
				<label for="investment-ratio">
					ratio
				</label>
			</section>
		</section>

		<output class={classNames({
			[formStyle.group]: true,
			[calcStyle.calc]: true
		})}
		>
			{ getMixWeights({ flask, investment }).map(mix => (
				<dl class={formStyle.control}>
					<dt>{mix.component}</dt>
					<dd>
						{mix.grams}
						<span>g</span>
					</dd>
				</dl>
			))}
		</output>
	</article>
);

export default Investment;
