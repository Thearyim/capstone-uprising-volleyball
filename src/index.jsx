import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    render(App)
  });
}
