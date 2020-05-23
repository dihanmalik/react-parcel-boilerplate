import { reducerKey } from './Reducer'

export const selector = (state) => state[reducerKey]

export const todosSelector = (state) => selector(state).data
