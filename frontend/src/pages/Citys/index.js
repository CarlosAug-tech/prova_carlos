import React, { useState } from 'react';
import ListCitys from '../../components/ListCitys';
import PanelCity from '../../components/PanelCity';

import { Container } from './styles';

export default function Citys() {
  const [valueCity, setValueCity] = useState('');

  return (
    <Container>
      <PanelCity valueCity={valueCity} setValueCity={setValueCity} />
      <ListCitys valueCity={valueCity} />
    </Container>
  );
}
