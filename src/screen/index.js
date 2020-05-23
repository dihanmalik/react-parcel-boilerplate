import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { tokenSelector } from '@core/session/Selector'

import MainRoutes from './MainRoutes'

const Login = React.lazy(() => import('./Login'))

const Routes = ({ token }) => (
  <React.Fragment>
    {token ? (
      <MainRoutes />
    ) : (
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <Redirect path={'*'} to={'/login'} />
        </Switch>
      )}
  </React.Fragment>
)

export default connect(
  state => ({
    token: tokenSelector(state)
  })
)(Routes)