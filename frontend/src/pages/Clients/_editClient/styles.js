import styled, { css } from 'styled-components';

export const Container = styled.div`
  > form {
    > select {
      max-width: calc(250px - 30px);
      width: 100%;
      height: 50px;
      margin: 0px 20px 20px 0;
      border-radius: 8px;
    }
  }
`;

export const SelectSexo = styled.select`
  ${(props) =>
    props.errorSelectSexo &&
    css`
      border: 2px solid red;
    `}
`;
