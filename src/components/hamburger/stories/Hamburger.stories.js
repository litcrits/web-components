import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Hamburger } from '../../../';

storiesOf('Hamburger', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add('Hamburger', () => {
    return (
      <Hamburger
        isOpen={boolean('isOpen', false)}
      />
    );
  });
