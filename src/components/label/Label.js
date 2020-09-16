import PropTypes from 'prop-types';
import React from 'react';
import LabelStyle from './Label.style';

function Label({ children, isRequired, name }) {
  return (
    <LabelStyle className="label" htmlFor={`input-${name}`}>
      {children}
      {isRequired && <span className="required-asterisk">*</span>}
    </LabelStyle>
  );
}

Label.propTypes = {
  children: PropTypes.any,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
};

Label.defaultProps = {
  isRequired: false,
  name: '',
};

export default Label;
