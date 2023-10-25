// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Fonts from './Styles/Fonts';
import store from './state/store';
import GlobalStyles from './Styles/Global';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <Fonts />
        <GlobalStyles />
        <App />
    </Provider>,
);
