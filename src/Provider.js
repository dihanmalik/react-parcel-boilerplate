import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as RoutingProvider } from '@core/routing'

const Providers = ({ children, store, persistor, history, loader }) => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor} loading={loader}>
      <RoutingProvider history={history}>
        {children}
      </RoutingProvider>
    </PersistGate>
  </StoreProvider>
)

export default Providers
