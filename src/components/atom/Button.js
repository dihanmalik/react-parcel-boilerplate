import React from 'react'
import cx from 'classnames'

const Button = ({
  children,
  label,
  className,
  outlined,
  icon,
  iconLoader,
  ...props
}) => {

  return (
    <button className={cx('button', className, { 'outlined__button': outlined })} {...props}>
      {children || (
        <React.Fragment>
          {iconLoader && (
            <div className="button__icon-loader">
              {iconLoader}
            </div>
          )}
          {icon && (
            <div className="button__icon">
              {icon}
            </div>
          )}
          <div className="button__text">{label}</div>
        </React.Fragment>
      )}
    </button>
  )
}

export default Button
