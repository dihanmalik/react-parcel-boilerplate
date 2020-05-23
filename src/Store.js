import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import middlware from './Middleware'

import reducers from './Reducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const storeCreator = () => {

  const store = createStore(persistReducer(persistConfig, reducers), middlware)

  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}

export default storeCreator
