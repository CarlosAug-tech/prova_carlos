import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Modal({
  isActiveModal,
  itemID,
  handleDelete,
  setIsActiveModal,
}) {
  return (
    <Container isActiveModal={isActiveModal}>
      <Content>
        <h3>Você realmente deseja remover este REGISTRO ?</h3>
        <div>
          <button type="button" onClick={() => handleDelete(itemID)}>
            Ok
          </button>
          <button type="button" onClick={() => setIsActiveModal(false)}>
            Cancelar
          </button>
        </div>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  isActiveModal: PropTypes.bool,
  itemID: PropTypes.number,
  handleDelete: PropTypes.func,
  setIsActiveModal: PropTypes.func,
};
