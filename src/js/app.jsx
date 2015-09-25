import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, HashLocation } from 'react-router';
import { ReduxRouter, reduxReactRouter, pushState } from 'redux-react-router';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import createHistory from 'history/lib/createHashHistory';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App.jsx';
import { Welcome } from './components/pages';

/* Shims */
// TODO: Remove when WinJS moves to React 0.14
React.findDOMNode = ReactDOM.findDOMNode;

let routes = (
  <Route path="/" component={App}>
    <Route path="/welcome" component={Welcome} />
  </Route>
);

let store = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  applyMiddleware(promiseMiddleware)
)(createStore)(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
, document.getElementById('app'));