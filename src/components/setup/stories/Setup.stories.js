import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Button, Setup } from '../../../';

storiesOf('Setup', module)
  .addDecorator(jsxDecorator)
  .add('Setup', () => {
    return (
      <Setup
        children={
          <>
            <div>Text</div>
            <Button>Test</Button>
            <Button color={Button.COLORS.link}>Link</Button>
          </>
        }
      />
    );
  });
