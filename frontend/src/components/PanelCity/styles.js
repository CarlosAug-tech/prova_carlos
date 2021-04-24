import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  background: #fff;

  h2 {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const OptionSearch = styled.div`
  margin: 10px;

  > input {
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #000;
  }
`;
