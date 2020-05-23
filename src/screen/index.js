import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { tokenSelector } from '@core/session/Selector'

const Home = React.lazy(() => import('./Home'))
const Todos = React.lazy(() => import('./Todos'))
const Login = React.lazy(() => import('./Login'))
const NotFound = React.lazy(() => import('./NotFound'))

const Routes = ({ token }) => (
  <React.Fragment>
    {token ? (
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/todos'} component={Todos} />
        <Route path={'/404'} component={NotFound} />
        <Redirect to={'/home'} />
      </Switch>
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