import React from 'react'
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const routerReducer = connectRouter(history)

export const routerEnhaner = history => reducer => connectRouter(history)(reducer)

export const routingMiddleware = routerMiddleware(history)
routingMiddleware.history = history;

export const Provider = ({ children, history }) => (
  <ConnectedRouter history={history}>{children}</ConnectedRouter>
)
