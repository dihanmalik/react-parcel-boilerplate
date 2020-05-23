import { createActions, payloadCreator } from '@core/actions'

export default createActions(
  {
    ADD_ITEM: payloadCreator,
  },
  {
    prefix: 'TODOS',
  }
)
