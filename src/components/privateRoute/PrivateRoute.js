import PropTypes from 'prop-types';
import React from 'react';
import { isNil } from 'lodash';
import { Redirect, Route } from 'react-router-dom';

export function generateRender({ children, isAuthenticated }) {
  const PrivateRouteRender = ({ location }) => {
    if (isAuthenticated) return children;

    return <Redirect to={{ pathname: '/login', state: { from: location } }}/>;
  };

  PrivateRouteRender.propTypes = {
    location: PropTypes.string,
  };

  return PrivateRouteRender;
}

function PrivateRoute({ children, ...rest }) {
  const accessToken = localStorage.getItem('accessToken');
  const isAuthenticated = !isNil(accessToken);

  return <Route {...rest} render={generateRender({ children, isAuthenticated })}/>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
