import PropTypes from 'prop-types';
import React from 'react';
import { isNil } from 'lodash';
import { connect } from 'react-redux';
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

function PrivateRoute({ accessToken, children, ...rest }) {
  const isAuthenticated = !isNil(accessToken);

  return <Route {...rest} render={generateRender({ children, isAuthenticated })}/>;
}

export function mapStateToProps({ user }) {
  return {
    accessToken: user.accessToken,
  };
}

PrivateRoute.propTypes = {
  accessToken: PropTypes.string,
  children: PropTypes.any,
};

export default connect(mapStateToProps)(PrivateRoute);
