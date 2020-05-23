import React from 'react'
import LinkButton from '@atom/LinkButton'
import Button from '@atom/Button'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import sessionAction from '@core/session/Action'

import '@styles/compund/NavBar.scss'
import { withRouter } from 'react-router-dom'

const links = [
  {
    to: '/home',
    label: 'Home'
  },
  {
    to: '/todos',
    label: 'Todos'
  },
  {
    to: '/posts',
    label: 'Posts'
  }
]

const NavBar = ({ location, logout }) => {
  return (
    <div className="navbar__container">
      {links.map(link => {
        const isActive = location.pathname === link.to
        return <LinkButton key={link.to} {...link} active={isActive} replace={isActive} />
      })}
      <Button label="Logout" onClick={logout} />
    </div>
  )
}

export default compose(
  connect(null, { logout: sessionAction.logout }),
  withRouter
)(NavBar)