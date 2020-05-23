import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'

import { routingMiddleware } from '@core/routing'

const composeEnhancer = composeWithDevTools({ maxAge: 500 })

export default composeEnhancer(
  applyMiddleware(routingMiddleware)
)
