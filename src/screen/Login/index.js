import React from 'react'
import { connect } from 'react-redux'
import sessionAction from '@core/session/Action'

import Button from '@atom/Button'

const Login = ({ login }) => {
  return (
    <div>
      <Button onClick={login}>Login Now</Button>
    </div>
  )
}

export default connect(
  null,
  {
    login: sessionAction.login
  }
)(Login)
