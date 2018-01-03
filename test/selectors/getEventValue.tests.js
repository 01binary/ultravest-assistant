import getEventValue from '../../src/selectors/getEventValue';

describe('selector getEventValue', () => {

	it('gets event target value', () => {
		expect(getEventValue({
			target: {
				value: 'testing'
			}
		})).toBe('testing');
	});
});
