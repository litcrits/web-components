import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setDefaults } from 'react-storybook-addon-props-combinations'
import { withRootAttribute } from 'storybook-addon-root-attribute';
import { Setup } from '../src';

setDefaults({
  // overwrite global defaults here
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  });
}

addDecorator(withRootAttribute)
addDecorator(storyFn => <Setup>{storyFn()}</Setup>);
configure(loadStories, module);
