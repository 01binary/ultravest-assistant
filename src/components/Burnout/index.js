import { h } from 'preact';
import presets from '../../config/burnoutPresets';
import getBurnoutPreset from '../../selectors/getBurnoutPreset';
import getBurnoutTime from '../../selectors/getBurnoutTime';
import style from './style';

/**
 * Display burnout preset calculated from flask size.
 * @param {object} flask - The flask props.
 * @returns {JSX.Element} - A stateless component.
 */
const Burnout = ({ flask }) => {
	const preset = getBurnoutPreset(presets, flask);

	return (
		<section class={style.burnout}>
			<h2>Burnout</h2>

			<dl>
				<dt>Preset</dt>
				<dd>
					{preset.diameter} X {preset.height} in
					{ getIsLastPreset(preset) &&
						<span class="preset-largest">Largest</span>
					}
				</dd>

				<dt>Time</dt>
				<dd>{getBurnoutTime(preset)} hours</dd>
			</dl>
		</section>
	);
};

const getIsLastPreset = (preset) => (
	preset === presets[presets.length - 1] || null
);

export default Burnout;
