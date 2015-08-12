import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashLocation } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { combineReducers, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import { Welcome } from './components/pages';
const { Component } = React;

/* Shims */
// TODO: Remove when WinJS moves to React 0.14
React.findDOMNode = ReactDOM.findDOMNode;

let store = createStore(combineReducers(reducers), {}, [
  promiseMiddleware
]);

const RouteComponent = reduxRouteComponent(store);

ReactDOM.render((
  <Router history={history}>
    <Route component={RouteComponent}>
      <Route path="/" component={App}>
        <Route path="/welcome" component={Welcome} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));