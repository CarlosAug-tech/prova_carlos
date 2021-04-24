import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, OptionSearch } from './styles';

export default function PanelCity({ valueCity, setValueCity }) {
  return (
    <Container>
      <Content>
        <h2>Filtro por Cidade</h2>
        <OptionSearch>
          <input
            type="text"
            placeholder="Pesquise pela Cidade ou UF"
            onChange={(e) => setValueCity(e.target.value)}
            value={valueCity}
          />
        </OptionSearch>
      </Content>
    </Container>
  );
}

PanelCity.propTypes = {
  valueCity: PropTypes.string,
  setValueCity: PropTypes.func,
};
