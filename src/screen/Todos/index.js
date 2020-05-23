import React from 'react'
import { connect } from 'react-redux'
import sessionAction from '@core/session/Action'

import Button from '@atom/Button'

const Todos = ({ logout }) => {
  return (
    <div>
      <h1>Todo Page</h1>
      <Button onClick={logout}>
        Log out
      </Button>
    </div>
  )
}

export default connect(
  null, {
  logout: sessionAction.logout
}
)(Todos)
