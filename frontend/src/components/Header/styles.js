import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.header`
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  position: fixed;
  background: #89b0ae;
`;

export const Logo = styled(Link)`
  padding: 3px 0;
  font-family: 'Bangers';
  font-size: 25px;
  position: relative;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
  transition: color 0.8s ease, border 0.8s ease;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transform: translateX(-50%);
    transition: width 0.4s ease, background 0.8s ease;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }

  &:hover {
    color: #000;
    border-color: #000;

    &::before,
    &::after {
      width: 100%;
      background: #000;
    }
  }
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
`;

export const MenuNav = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  & + li {
    margin-left: 5px;
    padding-left: 5px;
    /* border-left: 1px solid #fff; */
  }

  > a {
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;
    transition: color 0.4s ease;

    &::after {
      content: '';
      width: 0;
      height: 3px;
      left: 50%;
      bottom: -5px;
      position: absolute;
      border-radius: 10px;
      background-color: transparent;
      transform: translateX(-50%);
      transition: width 0.6s ease, background 0.4s ease;
    }

    > svg {
      align-self: center;
    }
  }

  ${(props) =>
    props.active
      ? css`
          > a {
            color: #ffd6ba;

            &::after {
              width: 50%;
              background-color: #ffd6ba;
            }
          }
        `
      : css`
          &:hover {
            > a {
              color: #dbdbdb;
            }
          }
        `}
`;
