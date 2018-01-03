import { h } from 'preact';
import classNames from 'obj-str';
import Units from '../Units';
import getMixWeights from '../../selectors/getMixWeights';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import calcStyle from '../App/style/calc';
import style from './style';

/**
 * Investment parameters
 * @param {object} flask - The flask props provided by withFlask.
 * @param {object} investment - The investment props provided by withInvestment.
 * @param {function} setInvestmentPreset - The handler provided by withInvestment.
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
					id="investment-preset"
					name="investment-preset"
					onChange={handleInvestmentPresetChange}
				>
					{ Object.keys(investment.presets).map(preset => (
						<option selected={preset === investment.preset}>
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
			{ getMixWeights({ flask, investment }).map(mix => (
				<dl class={formStyle.control}>
					<dt>{mix.component}</dt>
					<dd>
						{mix.grams}
						<Units alt="grams">
							g
						</Units>
					</dd>
				</dl>
			))}
		</output>
	</article>
);

export default Investment;
