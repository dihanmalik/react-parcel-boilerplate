import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { tokenSelector } from '@core/session/Selector'

const Home = React.lazy(() => import('./Home'))
const Todos = React.lazy(() => import('./Todos'))
const NotFound = React.lazy(() => import('./NotFound'))
const Login = React.lazy(() => import('./Login'))

export const Routes = ({ token }) => (
  <Switch>
    {token ? (
      <>
        <Route exact path={'/'} component={Home} />
        <Route path={'/todos'} component={Todos} />
        <Route path={'/404'} component={NotFound} />
        <Redirect to={'/'} />
      </>
    ) : (
        <>
          <Route path={'/'} component={Login} />
          <Redirect to={'/'} />
        </>
      )}
  </Switch>
)

export default connect(
  state => ({
    token: tokenSelector(state)
  })
)(Routes)