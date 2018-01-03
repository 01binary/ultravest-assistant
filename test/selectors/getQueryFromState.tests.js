import getQueryFromState from '../../src/selectors/getQueryFromState';

describe('selector getQueryFromState', () => {

	it('deflates state', () => {
		expect(getQueryFromState({
			myobject: {
				propertyOne: 'hello',
				propertyTwo: 'world'
			},
			notobject: 'testing'
		})).toEqual({
			'myobject-propertyOne': 'hello',
			'myobject-propertyTwo': 'world',
			notobject: 'testing'
		});
	});
});
