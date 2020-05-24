import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import createMiddleware from './Middleware'
import createRequestsHandler from '@core/apiRequest'
import { abortRequests } from '@redux-requests/core'

import createReducer from './Reducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const storeCreator = () => {
  const { requestsReducer, requestsMiddleware } = createRequestsHandler()
  const middleware = createMiddleware(requestsMiddleware)
  const reducers = createReducer({ requestsReducer })

  const store = createStore(persistReducer(persistConfig, reducers), middleware)

  const persistor = persistStore(store)

  // window.onbeforeunload = () => {
  //   store.dispatch(abortRequests())
  // }

  return {
    store,
    persistor
  }
}

export default storeCreator
