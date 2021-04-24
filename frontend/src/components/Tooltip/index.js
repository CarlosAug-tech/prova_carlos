import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tooltip({ title, className = '', children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
