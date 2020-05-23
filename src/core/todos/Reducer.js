import { handleActions } from 'redux-actions'

import actions from './Action'

const initialState = {
  data: {},
  network: {
    loading: false,
    error: '',
  },
}

const reducer = handleActions(
  {
    [actions.addItem]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        [payload.id]: payload,
      },
    }),
  },
  initialState
)

export const reducerKey = 'todos'
reducer.key = reducerKey

export default reducer
