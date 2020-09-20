import PropTypes from 'prop-types';
import React from 'react';
import Classnames from 'classnames';
import Style from './Hamburger.style';

function Hamburger({ isOpen, toggle }) {
  const classes = Classnames({
    hamburger: true,
    open: isOpen
  });

  return (
    <Style className="hamburger-wrapper">
      <span onClick={toggle} className={classes}>
        <span className="hamburger1"></span>
        <span className="hamburger2"></span>
        <span className="hamburger3"></span>
        <span className="hamburger-cross"></span>
      </span>
    </Style>
  );
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

Hamburger.defaultProps = {
  isOpen: false,
  toggle: Function.prototype,
};

export default Hamburger;
