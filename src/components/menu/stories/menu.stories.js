import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { getVisibleItems, Button, Menu } from '../../../';

const groups = [
  [
    { label: 'One' },
    { label: 'Two' },
  ], [
  ],
  // should always show items that do not specify isVisible
  [
    { label: 'Uno' },
    { label: 'Dos' },
    { label: 'Tres' },
  ],
  // should only display items where isVisible resolves to true
  [
    { label: 'Should not display', isVisible: false },
    { label: 'Also should not display', isVisible: () => false },
    { label: 'Should display', isVisible: true },
    { label: 'Also should display', isVisible: () => true },
  ],
  // if a group has no visible items, it should not display anything
  [
    { label: 'Should not display 1', isVisible: false },
    { label: 'Should not display 2', isVisible: false },
    { label: 'Should not display 3', isVisible: false },
  ],
];

const Wrapper = styled.div({
  position: 'relative',
  float: 'right',
  padding: '0 20px 0 12px',
  cursor: 'pointer',

  '.menu.active': {
    right: '20px',
    width: '168px',
    zIndex: 1,
  },
});

function PlaygroundExample() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <span>Icon is on the right</span>
      <Wrapper>
        <Button className="menu-button" onClick={() => setIsMenuOpen(true)}>Open</Button>
        <Menu
          groups={getVisibleItems(groups)}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          outsideClickIgnoreClass="menu-button"
        />
      </Wrapper>
    </>
  );
}

storiesOf('Menu', module)
  .add('Example', () => <PlaygroundExample/>);
