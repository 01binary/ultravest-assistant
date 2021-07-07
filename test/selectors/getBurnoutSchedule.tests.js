import getBurnoutSchedule from '../../src/selectors/getBurnoutSchedule';

describe('selector getBurnoutSchedule', () => {

	it('returns preset for exact flask size', () => {
		expect(getBurnoutSchedule(
			[
				{
					diameter: 8,
					height: 5,
					segments: [
						{
							name: 'first',
							rate: 100,
							temp: 200,
							hold: 0
						},
						{
							name: 'second',
							rate: 50,
							temp: 300,
							hold: 2
						}
					]
				},
				{
					diameter: 2,
					height: 4,
					segments: [
						{
							name: 'third',
							rate: 10,
							temp: 30,
							hold: 2
						}
					]
				},
				{
					diameter: 2,
					height: 3,
					segments: [
						{
							name: 'fourth',
							rate: 30,
							temp: 90,
							hold: 1
						}
					]
				}
			],
			{
				// requested 2 X 3
				diameter: 2,
				height: 3
			}
		)).toEqual([{
			// found exact match 2 X 3, returns segments
			name: 'fourth',
			rate: 30,
			temp: 90,
			hold: 1
		}]);
	});

	it('returns the shortest preset for flask size', () => {
		expect(getBurnoutSchedule(
			[
				{
					diameter: 2,
					height: 2,
					segments: [
						{
							name: 'first',
							rate: 100,
							temp: 200,
							hold: 0
						},
						{
							name: 'second',
							rate: 50,
							temp: 300,
							hold: 2
						}
					]
				},
				{
					diameter: 3,
					height: 3,
					segments: [
						{
							name: 'third',
							rate: 10,
							temp: 30,
							hold: 2
						}
					]
				},
				{
					diameter: 3,
					height: 5,
					segments: [
						{
							name: 'fourth',
							rate: 20,
							temp: 80,
							hold: 2
						}
					]
				},
				{
					diameter: 3,
					height: 6,
					segments: [
						{
							name: 'fifth',
							rate: 30,
							temp: 90,
							hold: 1
						}
					]
				}
			],
			{
				// requested 3 X 4
				diameter: 3,
				height: 4
			}
		)).toEqual([
			// smallest available 3 X 5 (next is 3 X 6)
			{
				name: 'fourth',
				rate: 20,
				temp: 80,
				hold: 2
			}
		]);
	});

	it('returns the longest preset if flask exceeds largest size', () => {
		expect(getBurnoutSchedule(
			[
				{
					diameter: 3,
					height: 3,
					segments: [
						{
							name: 'first',
							rate: 100,
							temp: 200,
							hold: 0
						},
						{
							name: 'second',
							rate: 50,
							temp: 300,
							hold: 2
						}
					]
				},
				{
					diameter: 5,
					height: 10,
					segments: [
						{
							name: 'third',
							rate: 10,
							temp: 30,
							hold: 2
						}
					]
				},
				{
					diameter: 10,
					height: 5,
					segments: [
						{
							name: 'fourth',
							rate: 20,
							temp: 80,
							hold: 2
						}
					]
				},
				{
					diameter: 10,
					height: 8,
					segments: [
						{
							name: 'fifth',
							rate: 30,
							temp: 90,
							hold: 1
						}
					]
				}
			],
			{
				// requesting 10 X 10
				diameter: 10,
				height: 10,
				segments: [
					{
						name: 'sixth',
						rate: 70,
						temp: 90,
						hold: 1
					}
				]
			}
		)).toEqual([
			// largest available 10 X 8
			{
				name: 'fifth',
				rate: 30,
				temp: 90,
				hold: 1
			}
		]);
	});
});
