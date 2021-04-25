import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(50% - 40px);
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  > div {
    align-self: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: relative;

    > img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.4s ease, opacity 0.4s ease;

      > a {
        font-size: 20px;
        color: #fff;
        transition: color 0.4s;

        &:hover {
          color: #dbdbdb;
          text-decoration: underline;
        }
      }
    }

    &:hover > div {
      visibility: visible;
      opacity: 1;
    }
  }
`;
