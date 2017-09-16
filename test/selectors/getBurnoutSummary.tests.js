import getBurnoutSummary from '../../src/selectors/getBurnoutSummary';

describe('selector getBurnoutSummary', () => {

	test('formats summary with a valid preset', () => {
		expect(getBurnoutSummary({
			diameter: 2,
			height: 3
		})).toEqual('3 X 3, 8 hours');
	});
});
