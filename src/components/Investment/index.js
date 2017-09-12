import { h } from 'preact';
import style from './style';

const defaultPresets = {};

/**
 * Investment Parameters.
 * @param {number} props.investment.preset - The investment ratio preset.
 * @param {object} props.investment.presets - The available investment presets.
 * @param {func} props.setInvestmentPreset - The function called to set investment ratio preset.
 * @returns {JSX.Element} - A React stateless component.
 */
const Investment = (props) => (
	<section class={style.investment}>
		<h2>Investment</h2>

		<label for="investment-ratio-preset">
			Ratio (W:P)
		</label>

		<select
			name="investment-ratio-preset"
			value={props.investment.preset}
			onChange={props.setInvestmentPreset}
		>
			{ Object.keys(props.investment.presets || defaultPresets).map(preset => (
				<option selected={preset === props.investment.preset}>
					{preset}
				</option>
			))}
		</select>
	</section>
);

export default Investment;
