// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Utils
import * as serviceWorker from './serviceWorker';

// CSS
import './../node_modules/skeleton-css/css/normalize.css';
import './../node_modules/skeleton-css/css/skeleton.css';

ReactDOM.render(<App />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
