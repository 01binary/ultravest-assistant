import { lifecycle } from 'recompose';
import { CUSTOM } from './withFlask';
import qs from 'qs';

/**
 * Update state from query string
 */
export default lifecycle({
	componentDidMount() {
		const {
			flaskPreset,
			flaskDiameter,
			flaskHeight,
			investmentRatio,
			view
		} = qs.parse(global.location.search);
		
		if (flaskPreset &&
			flaskPreset !== CUSTOM &&
			this.props.flask.preset !== flaskPreset &&
			this.props.handleFlaskPresetChange) {
			this.props.handleFlaskPresetChange(getEvent(flaskPreset));
		}

		if (flaskDiameter &&
			this.props.flask.diameter !== flaskDiameter &&
			this.props.handleFlaskDiameterChange) {
			this.props.handleFlaskDiameterChange(getEvent(flaskDiameter));
		}

		if (flaskHeight &&
			this.props.flask.height !== flaskHeight &&
			this.props.handleFlaskHeightChange) {
			this.props.handleFlaskHeightChange(getEvent(flaskHeight));
		}

		if (investmentRatio &&
			this.props.investment.preset !== investmentRatio &&
			this.props.handleInvestmentPresetChange) {
			this.props.handleInvestmentPresetChange(getEvent(investmentRatio));
		}

		if (view &&
			this.props.view !== view &&
			this.props.handleViewChange) {
			this.props.handleViewChange(getEvent(view));
		}
	}
});

const getEvent = value => ({ target: { value } });
