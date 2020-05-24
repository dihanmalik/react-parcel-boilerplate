import { abortRequests, success, error, abort } from '@redux-requests/core'


const requestCreator = (actionType, { payloadCreator, metaCreator }) =>
  (payload, meta) => ({
    type: actionType,
    request: payloadCreator(payload),
    ...(metaCreator ? { meta: metaCreator(payload, meta) } : {})
  })

const cancelActionCreator = (actionType) => (cancelOption) => {
  if (cancelOption.constructor === Object) {
    return abortRequests([{ requestType: actionType, ...cancelOption }])
  }
  return abortRequests([actionType])
}

export const requestActionFactory = (namespace, separator = '/') =>
  (type, payloadCreator, metaCreator) => {
    const actionType = `${namespace}${separator}${type}`

    return {
      type: actionType,
      request: requestCreator(actionType, { payloadCreator, metaCreator }),
      success: success(actionType),
      error: error(actionType),
      abort: abort(actionType),
      cancel: cancelActionCreator(actionType)
    }
  }