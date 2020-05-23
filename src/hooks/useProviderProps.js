import React from 'react'
import createStore from '../Store'
import { routingMiddleware } from '@core/routing'

const { store, persistor } = createStore()

const useProviderProps = () => {
  return {
    store,
    persistor,
    history: routingMiddleware.history,
    loader: <h1>Loading...</h1>,
  }
}

export default useProviderProps
