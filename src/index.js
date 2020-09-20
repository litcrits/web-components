import { hijackEffects } from 'stop-runaway-react-effects';
import { getVisibleItems } from './utilities/visibleItems';
import ApolloClient from './components/apolloClient';
import Button from './components/button';
import Field from './components/field';
import Hamburger from './components/hamburger';
import HelperText from './components/helperText';
import Input from './components/input';
import Label from './components/label';
import Menu from './components/menu';
import PrivateRoute from './components/privateRoute';
import Setup from './components/setup';

if (process.env.NODE_ENV !== 'production') {
  hijackEffects();
}

export {
  getVisibleItems,
  ApolloClient,
  Button,
  Field,
  Hamburger,
  HelperText,
  Input,
  Label,
  Menu,
  PrivateRoute,
  Setup,
};
