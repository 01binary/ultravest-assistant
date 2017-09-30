import { h } from 'preact';
import getMixWeights from '../../selectors/getMixWeights';
import style from './style';

/**
 * Investment Parameters.
 * @param {object} flask - The flask props.
 * @param {number} investment - The investment props.
 * @param {func} setInvestmentPreset - The function called to set investment ratio preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Investment = (
	{
		flask,
		investment,
		handleInvestmentPresetChange
	}) => (

	<article class={style.investment}>
		<h2>investment</h2>

		<label for="investment-ratio">
			ratio
		</label>

		<select
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

		<blockquote>
			{ getMixWeights({ flask, investment }).map(mix => (
				<dl>
					<dt>{mix.component}</dt>
					<dd>{mix.grams}</dd>
				</dl>
			))}
		</blockquote>
	</article>
);

export default Investment;
