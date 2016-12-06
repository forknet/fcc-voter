import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import VotesContainer from './containers/votes-container';
import VoteTemplate from './components/vote-template';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import reducers from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={VoteTemplate} />
        <Route path="allposts" component={VotesContainer} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#project'));
