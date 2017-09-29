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
				temp: 500,
				middle: 'over',
				time: '2 hours',
				end: 'for casting'
			},
			{
				heading: 'test heading',
				action: 'hold',
				temp: 500,
				middle: 'for',
				time: '1 hour'
			}
		]);
	});

	test('calculates up transition with no hold for one segment', () => {
		expect(getBurnoutSteps({
			schedule: [
				{
					name: 'test heading',
					rate: 250,
					temp: 500,
					hold: 0
				}
			]
		})).toEqual([
			{
				heading: 'test heading',
				action: 'raise to',
				temp: 500,
				middle: 'over',
				time: '2 hours',
				end: 'for casting'
			}
		]);
	});

	test('calculates only hold for segments with no difference', () => {
		expect(getBurnoutSteps({
			schedule: [
				{
					name: 'test heading',
					rate: 250,
					temp: 500,
					hold: 0
				},
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
				temp: 500,
				middle: 'over',
				time: '2 hours',
				end: null
			},
			{
				heading: 'test heading',
				action: 'hold',
				temp: 500,
				middle: 'for',
				time: '1 hour'
			}
		]);
	});

	test('calculates four steps with two segments', () => {
		expect(getBurnoutSteps({
			schedule: [
				{
					name: 'first segment',
					rate: 300,
					temp: 600,
					hold: 1
				},
				{
					name: 'second segment',
					rate: 50,
					temp: 700,
					hold: 5
				}
			]
		})).toEqual([
			{
				heading: 'first segment',
				action: 'raise to',
				temp: 600,
				middle: 'over',
				time: '2 hours',
				end: null
			},
			{
				heading: 'first segment',
				action: 'hold',
				temp: 600,
				middle: 'for',
				time: '1 hour'
			},
			{
				heading: 'second segment',
				action: 'raise to',
				temp: 700,
				middle: 'over',
				time: '2 hours',
				end: 'for casting'
			},
			{
				heading: 'second segment',
				action: 'hold',
				temp: 700,
				middle: 'for',
				time: '5 hours'
			}
		]);
	});
});
