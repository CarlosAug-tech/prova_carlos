import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonElement } from './styles';

export default function Button({ type, children }) {
  return (
    <Container>
      <ButtonElement type={type}>{children}</ButtonElement>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
