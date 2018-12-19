import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from  './app/Sagas/Quotes'
import Quotes from './app/Reducer/Quotes'
import { fetchQuotes } from './app/actions/Quotes'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(Quotes, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)  

export default store
// store.dispatch(fetchQuotes())