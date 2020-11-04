import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import App from './Components/App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

import { saveState } from './components/LocalStorage';

store.subscribe(() => {
  saveState({
    session: store.getState().session,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
