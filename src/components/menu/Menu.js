import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { isArray } from 'lodash';
import onClickOutside from 'react-onclickoutside';
import MenuStyle from './Menu.style';

function Menu({ groups, isOpen, onClose }) {
  const classes = classnames({
    active: isOpen,
    menu: true,
  });

  Menu.handleClickOutside = onClose;

  return (
    <MenuStyle className={classes}>
      {groups.map((group, groupIndex) => {
        return (
          <li key={groupIndex} className="group">
            <ul className="group-items">
              {isArray(group) && group.map((item, itemIndex) => {
                return <li key={itemIndex} className="group-item" onClick={item.onClick}>{item.label}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </MenuStyle>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  groups: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.string.isRequired,
      ]),
      onClick: PropTypes.func,
    }))
  ),
  onClose: PropTypes.func,
  // outsideClickIgnoreClass can be passed to onClickOutside to ignore certain classes
  // This can be useful to prevent clickoutside from triggering on the button that opens the menu
};

Menu.defaultProps = {
  isOpen: false,
  groups: [],
  onClose: Function.prototype,
};

export default onClickOutside(Menu, {
  handleClickOutside: () => Menu.handleClickOutside,
});