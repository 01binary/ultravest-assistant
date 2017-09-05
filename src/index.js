import './style';
import App from './components/App';
import withState from './state';

if (typeof withState !== 'function') {
	console.log('withState is not a func');
}

export default withState(App);
