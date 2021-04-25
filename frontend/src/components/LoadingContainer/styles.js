import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > svg {
    ${(props) =>
      props.loading &&
      css`
        animation: loadingSpinner 2s infinite linear;
      `}
  }

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
