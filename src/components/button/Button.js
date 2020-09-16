import Classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonStyle, { BUTTON_COLORS, BUTTON_SIZES } from './Button.style';

const DEFAULT_COLOR = BUTTON_COLORS.highlight;
const DEFAULT_SIZE = BUTTON_SIZES.medium;

function Button({ children, color, isDisabled, isFullWidth, onClick, size, type }) {
  const classes = Classnames({
    button: true,
    [`color-${BUTTON_COLORS[color] || DEFAULT_COLOR}`]: true,
    [`size-${BUTTON_SIZES[size] || DEFAULT_SIZE}`]: true,
    'full-width': isFullWidth,
  });

  return (
    <ButtonStyle className={classes} disabled={isDisabled} onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  type: PropTypes.string,
};

Button.defaultProps = {
  color: DEFAULT_COLOR,
  isDisabled: false,
  isFullWidth: false,
  onClick: Function.prototype,
  size: DEFAULT_SIZE,
};

Button.COLORS = BUTTON_COLORS;
Button.SIZES = BUTTON_SIZES;

export default Button;
