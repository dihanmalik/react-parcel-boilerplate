import { handleActions } from 'redux-actions'

import actions from './Action'

const initialState = {
  user: {},
  token: ''
}

const reducer = handleActions({
  [actions.login]: (state, _action) => ({
    ...state,
    user: {
      name: 'Dihan',
      id: 'id1'
    },
    token: 'tokenized',
  }),
  [actions.logout]: (state, _action) => ({
    ...state,
    user: {},
    token: ''
  }),
}, initialState)

export const reducerKey = 'session'
reducer.key = reducerKey

export default reducer;