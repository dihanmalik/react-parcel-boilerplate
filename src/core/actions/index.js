export { createActions, createAction } from 'redux-actions'

export const payloadCreator = payload => payload
export const metaCreator = (_payload, meta) => meta

export const payloadMetaCreator = (
  thisPayloadCreator = payloadCreator,
  thisMetaCreator = metaCreator
) => [thisPayloadCreator, thisMetaCreator]

export const actionsFactory = namespace => {
  return actions => createActions(...actions, { prefix: namespace })
}

export const actionFactory = (namespace, separator = '/') => (type, ...payloadMetaCreator) => {
  const actionType = `${namespace}${separator}${type}`
  return createAction(type, ...payloadMetaCreator)
}