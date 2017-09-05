import burnoutPresets from '../config/burnoutPresets';
import getBurnoutPreset from '../lib/getBurnoutPreset';
import getBurnoutTime from '../lib/getBurnoutTime';
import style from './style';

const Burnout = (props) => {
	const preset = getBurnoutPreset(burnoutPresets, props.flask);

	return (
		<section class={style.burnout}>
			<h2>Burnout</h2>

			<dl>
				<dt>Preset</dt>
				<dd>{preset.diameter} X {preset.height} in</dd>

				<dt>Time</dt>
				<dd>{getBurnoutTime(preset)} hours</dd>
			</dl>
		</section>
	);
};

export default Burnout;
