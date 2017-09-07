import { expect } from 'chai';
import getDefaultPresetName from '../../src/selectors/getDefaultPresetName';

describe('selector getDefaultPresetName', () => {

	it('returns the default preset name', () => {
		expect(getDefaultPresetName({
			// has default false
			one: {
				default: false
			},
			// has default true (should be chosen)
			two: {
				default: true
			},
			// has default undefined
			three: {
			}
		})).to.equal('two');
	});
	
	it('returns undefined if a default preset could not be found', () => {
		expect(getDefaultPresetName({
			// has default false
			one: {
				default: false
			},
			// has default undefined
			two: {
			},
			// has default undefined
			three: {
			}
		})).to.equal(undefined);
	});
});
