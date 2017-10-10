import changeCase from 'change-case';

export default name => (
	changeCase.paramCase(name)
);
