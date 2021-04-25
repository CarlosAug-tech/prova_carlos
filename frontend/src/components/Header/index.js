import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCity, FaUsers, FaSearchLocation } from 'react-icons/fa';

import { Container, Logo, Content, MenuNav, NavItem } from './styles';

export default function Header() {
  let location = useLocation();

  return (
    <Container>
      <Content>
        <Logo to="/">ProvaCarlos</Logo>
        <MenuNav>
          <NavItem active={location.pathname === '/clients'}>
            <Link to="/clients">
              <FaUsers size={14} />
              Consulta Clientes
            </Link>
          </NavItem>
          <NavItem active={location.pathname === '/client/register'}>
            <Link to="/client/register">
              <FaUser size={14} />
              Cadastrar Cliente
            </Link>
          </NavItem>
          <NavItem active={location.pathname === '/citys'}>
            <Link to="/citys">
              <FaSearchLocation size={14} />
              Consulta Cidades
            </Link>
          </NavItem>
          <NavItem active={location.pathname === '/city/register'}>
            <Link to="/city/register">
              <FaCity size={14} />
              Cadastrar Cidade
            </Link>
          </NavItem>
        </MenuNav>
      </Content>
    </Container>
  );
}
