export { createActions } from 'redux-actions'

export const payloadCreator = payload => payload
export const metaCreator = (_payload, meta) => meta

export const payloadMetaCreator = (
  thisPayloadCreator = payloadCreator,
  thisMetaCreator = metaCreator
) => [thisPayloadCreator, thisMetaCreator]
