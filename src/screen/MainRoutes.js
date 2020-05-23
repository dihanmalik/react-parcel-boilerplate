import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '@compound/NavBar'

const Home = React.lazy(() => import('./Home'))
const Todos = React.lazy(() => import('./Todos'))
const Posts = React.lazy(() => import('./Posts'))
const NotFound = React.lazy(() => import('./NotFound'))

const MainRoute = () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/todos'} component={Todos} />
      <Route exact path={'/posts'} component={Posts} />
      <Route path={'/404'} component={NotFound} />
      <Redirect to={'/home'} />
    </Switch>
  </React.Fragment>
)

export default MainRoute
