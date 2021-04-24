import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  max-width: calc(250px - 30px);
  width: 100%;
  margin: 0px 20px 20px 0px;
  position: relative;

  > label {
    top: 16px;
    left: 40px;
    position: absolute;
    pointer-events: none;
    transition: all 0.4s;
  }

  > svg {
    top: 16px;
    left: 10px;
    position: absolute;
    transition: all 0.4s;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 16px 40px;
  border-radius: 8px;
  border: 1px solid #000;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid red;
    `}

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 5px;
    left: 5px;
    font-size: 10px;
    color: #ffd6ba;
  }

  &:focus ~ svg,
  &:not(:placeholder-shown) ~ svg {
    color: #ffd6ba;
  }
`;

export const Error = styled(Tooltip)`
  z-index: 10;
  height: 20px;
  right: 10px;
  top: 15px;
  position: absolute;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
