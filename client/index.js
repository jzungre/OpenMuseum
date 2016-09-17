import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import {Router, browserHistory} from 'react-router'
import Routes from './routes'

// import reducers from './reducers' //populate reducers

import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//Populate store prop below once reducers are defined
ReactDOM.render(
  <Provider>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.querySelector('#app')
)
