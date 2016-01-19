import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import { syncHistory } from 'redux-simple-router';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import Welcome from './components/pages/Welcome';

const reduxRouterMiddleware = syncHistory(hashHistory);

const store = compose(
  applyMiddleware(promiseMiddleware),
  applyMiddleware(reduxRouterMiddleware)
)(createStore)(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/welcome" component={Welcome} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));