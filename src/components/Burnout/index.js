import { h } from 'preact';
import burnoutPresets from '../../config/burnoutPresets';
import getBurnoutPreset from '../../selectors/getBurnoutPreset';
import getBurnoutTime from '../../selectors/getBurnoutTime';
import style from './style';

const unknown = {
	diameter: 0,
	height: 0
};

const Burnout = (props) => {
	const preset = getBurnoutPreset(burnoutPresets, props.flask || unknown);

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
