import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
  const {name}=props
  return (
    <button>{name}</button>
  )
}

Button.defaultProps={
  name:"default"
}

Button.propTypes={
  name:PropTypes.string.isRequired
}
export default Button