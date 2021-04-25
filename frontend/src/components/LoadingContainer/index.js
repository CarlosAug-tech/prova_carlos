import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function LoadingContainer({ loading }) {
  return (
    <Container loading={loading}>
      <FaSpinner size={16} />
    </Container>
  );
}

LoadingContainer.propTypes = {
  loading: PropTypes.bool,
};
