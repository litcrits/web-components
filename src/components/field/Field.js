import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty, isNil } from 'lodash';
import HelperText from '../helperText';
import Input from '../input';
import Label from '../label';
import FieldStyle from './Field.style';

function Field({
  autoComplete,
  autoFocus,
  error,
  isDisabled,
  isRequired,
  label,
  name,
  onChange,
  placeholder,
  setRef,
  type,
  value,
}) {
  return (
    <FieldStyle id={isNil(name) ? null : `field-${name}`} className="field">
      <Label isRequired={isRequired} name={name}>{label}</Label>
      <Input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        isDisabled={isDisabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        setRef={setRef}
        type={Input.TYPES[type] || 'text'}
        value={value}
      />
      {!isNil(error) && !isEmpty(error) && <HelperText isError={true}>{error}</HelperText>}
    </FieldStyle>
  );
}

Field.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  type: PropTypes.oneOf([...Object.values(Input.TYPES), 'textarea']),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Field.defaultProps = {
  isDisabled: false,
  isRequired: false,
  onChange: Function.prototype,
  setRef: Function.prototype,
  type: 'text',
  value: '',
};

Field.TYPES = Input.TYPES;

export default Field;
