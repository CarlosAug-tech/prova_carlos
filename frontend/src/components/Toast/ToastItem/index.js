/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

const icons = {
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

export default function ToastItem({ message, style }) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasdescrption={!!message.description}
      style={style}
    >
      {icons[message.type]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}
