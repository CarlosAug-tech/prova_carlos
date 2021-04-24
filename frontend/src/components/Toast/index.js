import React from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';

import ToastItem from './ToastItem';

import { Container } from './styles';

export default function Toast({ messages }) {
  const messagesWithTransations = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransations.map(({ item, key, props }) => (
        <ToastItem key={key} message={item} style={props} />
      ))}
    </Container>
  );
}

Toast.propTypes = {
  messages: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
