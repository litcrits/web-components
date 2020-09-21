import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Slider } from '../../../';

const points = [
  { label: 'Lighter' },
  {},
  { label: 'Normal' },
  {},
  { label: 'Darker' },
];

storiesOf('Slider', module)
  .addDecorator(jsxDecorator)
  .add('Slider', () => {
    const [mark, setMark] = React.useState(2);

    return (
      <Slider markIndex={mark} onChangeIndex={(index) => setMark(index)} points={points}/>
    );
  });