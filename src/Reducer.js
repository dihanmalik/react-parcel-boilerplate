import { combineReducers } from 'redux'

import sessionReducer from '@core/session/Reducer'
import todosReducer from '@core/todos/Reducer'
import { routerReducer } from '@core/routing'

const combinedReducers = combineReducers({
  [todosReducer.key]: todosReducer,
  [sessionReducer.key]: sessionReducer,
  router: routerReducer
})

export default combinedReducers
