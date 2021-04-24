import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, InputElement, Error } from './styles';

export default function Input({ name, type, icon: Icon, labelText }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputElement
        placeholder=" "
        type={type}
        ref={inputRef}
        isErrored={!!error}
        defaultValue={defaultValue}
      />
      {Icon && <Icon />}
      <label>{labelText}</label>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {};
