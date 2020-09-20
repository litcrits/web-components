import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setDefaults } from 'react-storybook-addon-props-combinations'
import { withRootAttribute } from 'storybook-addon-root-attribute';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
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

const initialState = {
  theme: 'LIGHT',
};

function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  user: userReducer,
}));

addDecorator(withRootAttribute)
addDecorator(storyFn => {
  return (
    <Provider store={store}>
      <Setup>{storyFn()}</Setup>
    </Provider>
  );
});
configure(loadStories, module);
