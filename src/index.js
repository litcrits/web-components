import { hijackEffects } from 'stop-runaway-react-effects';
import ApolloClient from './components/apolloClient';
import Button from './components/button';
import Field from './components/field';
import HelperText from './components/helperText';
import Input from './components/input';
import Label from './components/label';
import PrivateRoute from './components/privateRoute';
import Setup from './components/setup';

if (process.env.NODE_ENV !== 'production') {
  hijackEffects();
}

export {
  ApolloClient,
  Button,
  Field,
  HelperText,
  Input,
  Label,
  PrivateRoute,
  Setup,
};
