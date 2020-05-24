import { handleRequests } from '@redux-requests/core'
import { createDriver } from '@redux-requests/axios'
import { requestActionFactory } from './requestActionFactory'
import axios from 'axios'


export const createRequestsHandler = (options = {}) => {
  return handleRequests({
    driver: {
      default: createDriver(
        axios.create({
          baseURL: 'https://jsonplaceholder.typicode.com'
        })
      )
    },
    ...options
  })
}

export { requestActionFactory }
export default createRequestsHandler
