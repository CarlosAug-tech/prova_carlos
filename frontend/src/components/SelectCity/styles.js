import styled, { css } from 'styled-components';

export const Select = styled.select`
  border: 1px solid #000;

  ${(props) =>
    props.errorSelectCity &&
    css`
      border: 2px solid red;
    `}
`;
