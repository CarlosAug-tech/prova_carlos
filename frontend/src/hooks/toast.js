import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import Toast from '../components/Toast';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(async ({ type, title, description }) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback(async (id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export { ToastProvider, useToast };
