import React from 'react';
import PropTypes from 'prop-types';

import { ToastProvider } from './toast';

export default function AppProvider({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.node,
};
