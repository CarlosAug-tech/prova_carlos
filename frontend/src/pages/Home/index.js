import React from 'react';
import { Link } from 'react-router-dom';

import registerClient from '../../assets/Images/registerClient.png';
import searchClient from '../../assets/Images/searchClient.jpg';
import registerCity from '../../assets/Images/registerCity.png';
import searchCity from '../../assets/Images/searchCity.jpg';

import { Container, Content, Card } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Card>
          <div>
            <img src={registerClient} alt="Cadastro de clientes" />
            <div>
              <Link to="/client/register">Cadastrar Cliente</Link>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={registerCity} alt="Cadastro de cidade" />
            <div>
              <Link to="/city/register">Cadastrar Cidades</Link>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={searchClient} alt="Consultar clientes" />
            <div>
              <Link to="/clients">Consultar Clientes</Link>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <img src={searchCity} alt="Consultar cidades" />
            <div>
              <Link to="/citys">Consultar Cidades</Link>
            </div>
          </div>
        </Card>
      </Content>
    </Container>
  );
}
