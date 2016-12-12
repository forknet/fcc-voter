import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import Home from './containers/home';
import NewPoll from './containers/newpoll';
import Poll from './components/poll';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import reducers from './reducers/';

import { AUTH_USER } from './actions/types'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const token = localStorage.getItem('token');

if(token) {
  store.dispatch( {type: AUTH_USER} );
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="newpoll" component={NewPoll} />
        <Route path="poll/:id" component={Poll} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#project'));
