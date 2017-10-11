import getSegmentAnchor from '../../src/selectors/getSegmentAnchor';

describe('selector getSegmentAnchor', () => {

	test('transforms any name to name case', () => {
		expect(getSegmentAnchor('My Long Title and stuff'))
			.toEqual('my-long-title-and-stuff');
	});
});
