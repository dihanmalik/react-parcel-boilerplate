import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import cx from 'classnames'

const LinkButton = ({ to, active, replace, ...props }) => {
  return (
    <Link to={to} replace={replace}>
      <Button className={cx('link-button', { '__active': active })} {...props} />
    </Link>
  )
}

export default LinkButton
