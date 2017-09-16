import { h } from 'preact';
import style from './style';

/**
 * Investment Parameters.
 * @param {number} props.investment - The investment props.
 * @param {func} props.setInvestmentPreset - The function called to set investment ratio preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Investment = (
	{
		investment,
		handleInvestmentPresetChange
	}) => (

	<article class={style.investment}>
		<h2>Investment</h2>

		<label for="investment-ratio-preset">
			Ratio (W:P)
		</label>

		<select
			name="investment-ratio-preset"
			value={investment.preset}
			onChange={handleInvestmentPresetChange}
		>
			{ Object.keys(investment.presets).map(preset => (
				<option selected={preset === investment.preset}>
					{preset}
				</option>
			))}
		</select>
	</article>
);

export default Investment;
