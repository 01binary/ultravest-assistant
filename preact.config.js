export default (config) => {
	Object.assign(config.resolve.aliases, {
		'react-dom/server': 'preact-render-to-string',
		'react-addons-test-utils': 'preact-test-utils',
		//'react-addons-transition-group': 'preact-transition-group',
		'react-dom': 'preact-compat-enzyme',
		react: 'preact-compat-enzyme'
	});
};
