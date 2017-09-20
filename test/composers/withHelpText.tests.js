import withHelpText from '../../src/composers/withHelpText';
import reflect from '../fixtures/reflector.tests.fixture';

describe('composer withHelpText', () => {

	let reflector;

	beforeAll(() => {
		reflector = reflect(withHelpText);
	});

	afterAll(() => {
		reflector = null;
	});

	test('should set showHelpText true initially', () => {
		expect(reflector.props.showHelpText).toEqual(true);
	});

	test('should set showHelpText to false on handleShowHelpText', done => {
		reflector.props.handleShowHelpText();
		reflector.update(() => {
			expect(reflector.props.showHelpText).toEqual(false);
			done();
		});

	});
});
