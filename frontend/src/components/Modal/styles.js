import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: visibility 0.4s ease, opacity 0.4s ease;

  ${(props) =>
    props.isActiveModal &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  > h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 120px;
      padding: 7px;
      border: 0;
      border-radius: 8px;
      color: #fff;
      background: #89b0ae;

      & + button {
        margin-left: 20px;
      }
    }
  }
`;
