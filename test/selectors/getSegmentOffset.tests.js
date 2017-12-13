import getSegmentOffset from '../../src/selectors/getSegmentOffset';
import getMaxSegmentIndex from '../../src/selectors/getMaxSegmentIndex';

describe('selector getSegmentOffset', () => {

	test('should offset the lowest temperature segment by 2 steps', () => {
		expect(getSegmentOffset(0, max, segments)).toBe(2);
	});

	test('should offset the interim temperature segment by 1 step', () => {
		expect(getSegmentOffset(1, max, segments)).toBe(1);
	});

	test('should not offset the peak temperature segment', () => {
		expect(getSegmentOffset(2, max, segments)).toBe(0);
	});

	test('should not offset the temperature segment directly following the peak', () => {
		expect(getSegmentOffset(3, max, segments)).toBe(0);
	});

	test('should offset the next lower temperature segment by 1 step', () => {
		expect(getSegmentOffset(4, max, segments)).toBe(1);
	});

	const segments = [
		{
			name: 'water removal',
			rate: 300,
			temp: 300,
			hold: 1
		},
		{
			name: 'thermal transition',
			rate: 400,
			temp: 700,
			hold: 1
		},
		{
			name: 'pattern removal',
			rate: 325,
			temp: 1350,
			hold: 2
		},
		{
			name: 'casting',
			rate: 700,
			temp: 700,
			hold: 1
		},
		{
			name: 'cooldown',
			rate: 350,
			temp: 0,
			hold: 0
		}
	];

	const max = getMaxSegmentIndex(segments);
});
