import { hijackEffects } from 'stop-runaway-react-effects';
import Button from './components/button';
import Field from './components/field';
import HelperText from './components/helperText';
import Input from './components/input';
import Label from './components/label';
import Setup from './components/setup';
import { apolloClient } from './utilities/networkRequest';

if (process.env.NODE_ENV !== 'production') {
  hijackEffects();
}

export {
  apolloClient,
  Button,
  Field,
  HelperText,
  Input,
  Label,
  Setup,
};
