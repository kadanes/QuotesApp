import React, {Component} from 'react'
import { createAppContainer } from "react-navigation"

import Navigator from './app/Navigator/Navigator'

const AppContainer = createAppContainer(Navigator)

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from  './app/Sagas/Quotes'
import Quotes from './app/Reducer/Quotes'
import { fetchQuotes } from './app/actions/Quotes'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Quotes,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)  

store.dispatch(fetchQuotes())     

// export default (<Provider store={store}><AppContainer/></Provider>  )

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppContainer />    
      </Provider>
    );
  }
}
