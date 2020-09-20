import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Setup } from '../../../';

storiesOf('Setup', module)
  .addDecorator(jsxDecorator)
  .add('Setup', () => {
    return (
      <Setup
        children="Text"
      />
    );
  });
