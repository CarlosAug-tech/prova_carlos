import React, { useState } from 'react';
import ListClients from '../../components/ListClients';
import PanelClient from '../../components/PanelClient';

import { Container } from './styles';

export default function Clients() {
  const [typeSearchClient, setTypeSearchClient] = useState('');
  const [valueCPForRG, setValueCPForRG] = useState('');
  const [valueCity, setValueCity] = useState('');
  const [valueSalary, setValueSalary] = useState('');

  return (
    <Container>
      <PanelClient
        typeSearchClient={typeSearchClient}
        setTypeSearchClient={setTypeSearchClient}
        valueCPForRG={valueCPForRG}
        setValueCPForRG={setValueCPForRG}
        valueCity={valueCity}
        setValueCity={setValueCity}
        valueSalary={valueSalary}
        setValueSalary={setValueSalary}
      />
      <ListClients
        typeSearchClient={typeSearchClient}
        valueCPForRG={valueCPForRG}
        valueCity={valueCity}
        valueSalary={valueSalary}
      />
    </Container>
  );
}
