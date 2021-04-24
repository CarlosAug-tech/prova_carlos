import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/__layouts/default';

export default function RouteWrapper({
  exact,
  path,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

RouteWrapper.defaultProps = {
  exact: false,
};
