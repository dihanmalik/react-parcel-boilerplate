import React from 'react'

const Button = ({ children, label, ...props }) => {
  return <button {...props}>{children || label}</button>
}

export default Button
