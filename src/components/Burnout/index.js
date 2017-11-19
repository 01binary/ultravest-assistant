import { h } from 'preact';
import presets from '../../config/burnoutPresets';
import getBurnoutPreset from '../../selectors/getBurnoutPreset';
import getBurnoutTime from '../../selectors/getBurnoutTime';
import Diagram from '../Diagram';
import Steps from '../Steps';
import timelineStyle from '../App/style/timeline';
import style from './style';

/**
 * Display burnout preset calculated from flask size.
 * @param {object} flask - The flask props.
 * @param {bool} showSegments - Whether to show raw or formatted burnout steps.
 * @param {func} toggleSegmentView - Switches between raw and formatted steps.
 * @returns {JSX.Element} - A stateless component.
 */
const Burnout = ({
	flask,
	showSegments,
	toggleSegmentView
}) => {
	const preset = getBurnoutPreset(presets, flask);

	return (
		<article>
			<section class={timelineStyle.timeline}>
				<h2>burnout</h2>

				<output>
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
				</output>

				<Diagram segments={preset.segments} />

				<Steps
					segments={preset.segments}
					showSegments={showSegments}
					toggleSegmentView={toggleSegmentView}
				/>
			</section>
		</article>
	);
};

const getIsLastPreset = preset => (
	preset === presets[presets.length - 1] || null
);

export default Burnout;
