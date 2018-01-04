import getFlask from '../../src/selectors/getFlask';

describe('selector getFlask', () => {

	it('maps flask props', () => {
		const props = {
			query: {},
			flask,
			handleFlaskPresetChange: jest.fn(),
			handleFlaskDiameterChange: jest.fn(),
			handleFlaskHeightChange: jest.fn(),
			handleAddFlaskPreset: jest.fn(),
			handleRemoveFlaskPreset: jest.fn()
		};

		expect(getFlask(props)).toEqual({
			presets: props.flask.presets,
			preset: props.flask.preset,
			diameter: props.flask.diameter,
			height: props.flask.height,
			handleFlaskPresetChange: props.handleFlaskPresetChange,
			handleFlaskDiameterChange: props.handleFlaskDiameterChange,
			handleFlaskHeightChange: props.handleFlaskHeightChange,
			handleAddFlaskPreset: props.handleAddFlaskPreset,
			handleRemoveFlaskPreset: props.handleRemoveFlaskPreset
		});
	});

	it('supports query overrides', () => {
		const props = {
			query: {
				flask: {
					presets: overridePresets,
					preset: overridePreset,
					diameter: overrideDiameter,
					height: overrideHeight
				}
			},
			flask,
			handleFlaskPresetChange: jest.fn(),
			handleFlaskDiameterChange: jest.fn(),
			handleFlaskHeightChange: jest.fn(),
			handleAddFlaskPreset: jest.fn(),
			handleRemoveFlaskPreset: jest.fn()
		};

		expect(getFlask(props)).toEqual({
			presets: overridePresets,
			preset: overridePreset,
			diameter: overrideDiameter,
			height: overrideHeight,
			handleFlaskPresetChange: props.handleFlaskPresetChange,
			handleFlaskDiameterChange: props.handleFlaskDiameterChange,
			handleFlaskHeightChange: props.handleFlaskHeightChange,
			handleAddFlaskPreset: props.handleAddFlaskPreset,
			handleRemoveFlaskPreset: props.handleRemoveFlaskPreset
		});
	});

	const flask = {
		presets: {
			first: {
				diameter: 4,
				height: 8,
				default: true
			}
		},
		preset: 'first',
		diameter: 4,
		height: 8
	};
	const overrideDiameter = 3;
	const overrideHeight = 5;
	const overridePreset = 'another';
	const overridePresets = {
		another: {
			diameter: 3,
			height: 5,
			default: true
		},
		more: {
			diameter: 7,
			height: 9
		}
	};
});
