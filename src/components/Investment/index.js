import { h } from 'preact';
import style from './style';

/**
 * Investment Parameters.
 * @param {number} props.investment.preset - The investment ratio preset.
 * @param {object} props.investment.presets - The available investment presets.
 * @param {func} props.setInvestmentPreset - The function called to set investment ratio preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Investment = (props) => (
	<article class={style.investment}>
		<h2>Investment</h2>

		<label for="investment-ratio-preset">
			Ratio (W:P)
		</label>

		<select
			name="investment-ratio-preset"
			value={props.investment.preset}
			onChange={props.handleInvestmentPresetChange}
		>
			{ Object.keys(props.investment.presets).map(preset => (
				<option selected={preset === props.investment.preset}>
					{preset}
				</option>
			))}
		</select>
	</article>
);

export default Investment;
