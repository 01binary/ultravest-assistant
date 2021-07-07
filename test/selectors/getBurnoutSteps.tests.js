import getBurnoutSteps from '../../src/selectors/getBurnoutSteps';

describe('selector getBurnoutSteps', () => {

	it('calculates no steps with no segments', () => {
		expect(getBurnoutSteps([]).length).toEqual(0);
	});

	it('calculates up transition and hold step for one segment', () => {
		expect(getBurnoutSteps([
			{
				name: 'test heading',
				rate: 250,
				temp: 500,
				hold: 1
			}
		])).toEqual([
			{
				heading: 'test heading',
				action: 'raise to',
				temp: 500,
				middle: 'over',
				time: 2,
				units: 'hours',
				end: 'for casting'
			},
			{
				heading: 'test heading',
				action: 'hold',
				temp: 500,
				middle: 'for',
				time: 1,
				units: 'hour',
				end: null
			}
		]);
	});

	it('calculates up transition with no hold for one segment', () => {
		expect(getBurnoutSteps([
			{
				name: 'test heading',
				rate: 250,
				temp: 500,
				hold: 0,
				end: null
			}
		])).toEqual([
			{
				heading: 'test heading',
				action: 'raise to',
				temp: 500,
				middle: 'over',
				time: 2,
				units: 'hours',
				end: 'for casting'
			}
		]);
	});

	it('calculates only hold for segments with no difference', () => {
		expect(getBurnoutSteps([
			{
				name: 'test heading',
				rate: 250,
				temp: 500,
				hold: 0,
				end: null
			},
			{
				name: 'test heading',
				rate: 250,
				temp: 500,
				hold: 1,
				end: null
			}
		])).toEqual([
			{
				heading: 'test heading',
				action: 'raise to',
				temp: 500,
				middle: 'over',
				time: 2,
				units: 'hours',
				end: null
			},
			{
				heading: 'test heading',
				action: 'hold',
				temp: 500,
				middle: 'for',
				time: 1,
				units: 'hour',
				end: null
			}
		]);
	});

	it('calculates four steps with two segments', () => {
		expect(getBurnoutSteps([
			{
				name: 'first segment',
				rate: 300,
				temp: 600,
				hold: 1,
				end: null
			},
			{
				name: 'second segment',
				rate: 200,
				temp: 400,
				hold: 5,
				end: null
			}
		])).toEqual([
			{
				heading: 'first segment',
				action: 'raise to',
				temp: 600,
				middle: 'over',
				time: 2,
				units: 'hours',
				end: null
			},
			{
				heading: 'first segment',
				action: 'hold',
				temp: 600,
				middle: 'for',
				time: 1,
				units: 'hour',
				end: null
			},
			{
				heading: 'second segment',
				action: 'lower to',
				temp: 400,
				middle: 'over',
				time: 1,
				units: 'hour',
				end: 'for casting'
			},
			{
				heading: 'second segment',
				action: 'hold',
				temp: 400,
				middle: 'for',
				time: 5,
				units: 'hours',
				end: null
			}
		]);
	});
});
