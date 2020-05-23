import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import sessionAction from '@core/session/Action'

import Button from '@atom/Button'

const Home = ({ logout }) => {
  return (
    <div>
      <h1>THIS IS HOME</h1>
      <Link to="/todos">Go to Todos</Link>
      <Button onClick={logout}>
        <h3>Logout</h3>
      </Button>
    </div>
  )
}

export default connect(
  null,
  {
    logout: sessionAction.logout
  }
)(Home)
