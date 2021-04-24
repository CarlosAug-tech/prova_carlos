import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, OptionSearch } from './styles';

export default function PanelClient({
  typeSearchClient,
  setTypeSearchClient,
  valueCPForRG,
  setValueCPForRG,
  valueCity,
  setValueCity,
  valueSalary,
  setValueSalary,
}) {
  return (
    <Container>
      <Content>
        <h2>Filtro por Cliente</h2>
        <OptionSearch>
          <select onChange={(e) => setTypeSearchClient(e.target.value)}>
            <option value="">Selecione por CPF ou RG</option>
            <option value="CPF">CPF</option>
            <option value="RG">RG</option>
          </select>
          {typeSearchClient && (
            <input
              type="text"
              placeholder={
                typeSearchClient === 'CPF'
                  ? 'Pesquise o cliente por CPF'
                  : 'Pesquise o cliente por RG'
              }
              onChange={(e) => setValueCPForRG(e.target.value)}
              value={valueCPForRG}
            />
          )}
        </OptionSearch>
        <OptionSearch>
          <input
            type="text"
            placeholder="Pesquise pela Cidade ou UF"
            onChange={(e) => setValueCity(e.target.value)}
            value={valueCity}
          />
        </OptionSearch>
        <OptionSearch>
          <input
            type="text"
            placeholder="Pesquise pelo salário"
            onChange={(e) => setValueSalary(e.target.value)}
            value={valueSalary}
          />
        </OptionSearch>
      </Content>
    </Container>
  );
}

PanelClient.propTypes = {
  valueCPForRG: PropTypes.string,
  setValueCPForRG: PropTypes.func,
  typeSearchClient: PropTypes.string,
  setTypeSearchClient: PropTypes.func,
  valueCity: PropTypes.string,
  setValueCity: PropTypes.func,
  valueSalary: PropTypes.string,
  setValueSalary: PropTypes.func,
};
