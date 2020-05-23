import React from 'react'
import cx from 'classnames'

const Button = ({ children, label, className, ...props }) => {
  return (
    <button className={cx('button', className)} {...props}>
      {children || (
        <div className="button__text">{label}</div>
      )}
    </button>
  )
}

export default Button
