import { reducerKey } from './Reducer'

export const selector = state => state[reducerKey]

export const tokenSelector = state => selector(state).token

export const userSelector = state => selector(state).user