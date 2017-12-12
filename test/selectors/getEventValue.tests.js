import getEventValue from '../../src/selectors/getEventValue';

describe('selector getEventValue', () => {

	test('gets event target value', () => {
		expect(getEventValue({
			target: {
				value: 'testing'
			}
		})).toBe('testing');
	});
});
