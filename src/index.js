import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './imports/components/App.js';
import store from './store.js'

import registerServiceWorker from './imports/components/registerServiceWorker.js';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
