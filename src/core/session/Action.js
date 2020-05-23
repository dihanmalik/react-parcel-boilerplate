import { createActions } from '@core/actions'

export default createActions('LOGIN', 'LOGOUT', {
  prefix: 'SESSION'
})