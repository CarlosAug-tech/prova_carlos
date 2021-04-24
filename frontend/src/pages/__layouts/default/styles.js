import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 120px;

  > div {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    > form {
      display: flex;
      flex-wrap: wrap;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      padding: 20px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

      > h3 {
        width: 100%;
        margin-bottom: 20px;
        font-size: 32px;
        text-align: center;
      }
    }

    > div {
      table {
        width: 100%;
        border-collapse: collapse;

        th {
          padding: 20px;
        }

        th,
        td {
          padding: 10px;
          border: 1px solid #000;
        }

        td {
          text-align: center;

          > a {
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(29, 161, 242);

            > svg {
              margin-left: 3px;
            }
          }

          > button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            border: 0;
            color: #ff0000;
            background: transparent;

            > svg {
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
`;
