import reflect from '../fixtures/reflector.tests.fixture';
import withQuerySync from '../../src/enhancers/withQuerySync';

describe('enhancer withQuerySync', () => {

	let reflector;
	let handleQueryChange;
	let push;

	beforeAll(() => {
		handleQueryChange = jest.fn();
		push = jest.fn();
		reflector = reflect(withQuerySync, {
			query,
			history: { push },
			handleQueryChange
		});
	});

	afterAll(() => {
		reflector = null;
		handleQueryChange = null;
		push = null;
	});

	it('should handle query param change', () => {
		reflector.props.handleQueryParamChange('hello')({
			target: { value: 'world' }
		});
		
		expect(push).toBeCalledWith('?something-existing=existing%20value&hello=world');
		expect(handleQueryChange).toBeCalledWith({
			...query,
			hello: 'world'
		});
	});

	const query = {
		something: {
			existing: 'existing value'
		}
	};
});
