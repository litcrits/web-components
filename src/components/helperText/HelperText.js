import Classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import HelperTextStyle from './HelperText.style';

function HelperText({ children, isError }) {
  const classes = Classnames({
    'helper-text': true,
    'is-error': isError,
  });

  return (
    <HelperTextStyle className={classes}>
      {children}
    </HelperTextStyle>
  );
}

HelperText.propTypes = {
  children: PropTypes.any,
  isError: PropTypes.bool,
};

HelperText.defaultProps = {
  isError: false,
};

HelperText.style = HelperTextStyle;

export default HelperText;
