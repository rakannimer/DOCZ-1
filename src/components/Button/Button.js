import React, { Children, Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './buttons.scss'
import { mapComponentClasses } from '@src/utils'

const Button = ({
  clickHandler,
  buttonClasses = 'primary-button',
  children,
  disabled
}) => {
  return (
    <button
      disabled={disabled}
      onClick={clickHandler}
      className={mapComponentClasses(styles, buttonClasses)}
    >
      <Fragment>
        {Children.map(children, (c) => c)}
      </Fragment>
    </button>
  )
}

Button.propTypes = {
  /** Callback to handle click actions */
  clickHandler: PropTypes.func,
  /** Classes passed down from parent */
  buttonClasses: PropTypes.string,
  /** Text, icons wrapped in a <span> */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  disabled: PropTypes.bool
}

export default Button
