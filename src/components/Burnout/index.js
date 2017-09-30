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
		<article class={style.burnout}>
			<h2>burnout</h2>

			<blockquote>
				<dl>
					<dt>preset</dt>
					<dd>
						{preset.diameter} X {preset.height} in
						{ getIsLastPreset(preset) &&
							<span class={style.longest}>longest</span>
						}
					</dd>

					<dt>time</dt>
					<dd>{getBurnoutTime(preset)} hours</dd>
				</dl>
			</blockquote>
		</article>
	);
};

const getIsLastPreset = preset => (
	preset === presets[presets.length - 1] || null
);

export default Burnout;
