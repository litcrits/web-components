import PropTypes from 'prop-types';
import React from 'react';
import InputStyle from './Input.style';

export const TYPES = {
  email: 'email',
  number: 'number',
  password: 'password',
  text: 'text',
};

function Input({
  autoComplete,
  autoFocus,
  isDisabled,
  name,
  onChange,
  placeholder,
  setRef,
  type,
  value,
}) {
  return (
    <InputStyle
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className="input"
      disabled={isDisabled}
      id={`input-${name}`}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      ref={setRef}
      type={type}
      value={value}
    />
  );
}

Input.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  type: PropTypes.oneOf(Object.values(TYPES)),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  isDisabled: false,
  onChange: Function.prototype,
  setRef: Function.prototype,
  type: 'text',
  value: '',
};

Input.TYPES = TYPES;

export default Input;
