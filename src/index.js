import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers'

let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
