import React, { Suspense } from 'react'
import Provider from './Provider'
import useProviderProps from '@hooks/useProviderProps'

import Routes from './screen'

const App = () => {
  const providerProps = useProviderProps()
  return (
    <Provider {...providerProps}>
      <Suspense fallback={<h3>Loading screen...</h3>}>
        <Routes />
      </Suspense>
    </Provider>
  )
}

export default App