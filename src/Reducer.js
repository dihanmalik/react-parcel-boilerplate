import { combineReducers } from 'redux'

import sessionReducer from '@core/session/Reducer'
import todosReducer from '@core/todos/Reducer'
import { routerReducer } from '@core/routing'

export default ({ requestsReducer }) => combineReducers({
  [todosReducer.key]: todosReducer,
  [sessionReducer.key]: sessionReducer,
  requests: requestsReducer,
  router: routerReducer
})