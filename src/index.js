import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './redux/store'
import './index.css';
import App from './component';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,  document.getElementById('root'));

registerServiceWorker();