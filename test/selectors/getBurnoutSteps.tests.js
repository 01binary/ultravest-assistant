import getBurnoutSteps from '../../src/selectors/getBurnoutSteps';

describe('selector getBurnoutSteps', () => {

	test('calculates no steps with no segments', () => {
		expect(getBurnoutSteps({
			schedule: []
		}).length).toEqual(0);
	});

	test('calculates up transition and hold step for one segment', () => {
		expect(getBurnoutSteps({
			schedule: [
				{
					name: 'test heading',
					rate: 250,
					temp: 500,
					hold: 1
				}
			]
		})).toEqual([
			{
				heading: 'test heading',
				action: 'raise to',
				temp: '500°F',
				middle: 'over',
				time: '2 hours',
				end: 'for casting'
			},
			{
				heading: 'test heading',
				action: 'hold',
				temp: '500°F',
				middle: 'for',
				time: '1 hour'
			}
		]);
	});

	test('calculates down transition and hold step for one segment', () => {
	});

	test('calculates up transition with no hold for one segment', () => {
	});

	test('calculates only hold for one segment', () => {
	});

	test('calculates four steps with two segments', () => {
	});
});
