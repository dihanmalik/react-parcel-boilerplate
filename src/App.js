import React, { Suspense } from 'react'
import Provider from './Provider'
import useProviderProps from '@hooks/useProviderProps'

import Routes from './screen'

import './styles/index.scss'

const App = () => {
  const providerProps = useProviderProps()
  return (
    <Provider {...providerProps}>
      <React.Fragment>
        <Suspense fallback={<h3>Loading screen...</h3>}>
          <Routes />
        </Suspense>
      </React.Fragment>
    </Provider>
  )
}

export default App