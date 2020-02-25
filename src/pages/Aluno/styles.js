import styled from 'styled-components';

export const Container = styled.div`
  background: #17171a;
`;

export const Title = styled.div`
  display: flex;
  padding: 10px 20px;
  background: #fafafa;
  border-radius: 2px;
  align-items: center;

  svg {
    font-size: 30px;
    margin-right: 15px;
  }

  span {
    font-size: 30px;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
  border-radius: 4px;
  padding: 10px;

  form {
    background: #fafafa;
    border-radius: 2px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 0 0.4em #fff;

    div.alinhador-content {
      display: flex;
      flex-wrap: wrap;
    }

    div.alinhador {
      display: flex;
      flex-direction: column;
    }

    h5 {
      display: block;
      font-size: 24px;
      margin: 20px 0;
      color: #020202;
    }

    span {
      color: #fb6f91;
      margin-bottom: 10px;
      align-self: flex-start;
    }

    p {
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
    }

    p#status {
      margin-top: 10px;
    }

    input {
      font-size: 16px;
      width: 300px;
      height: 38px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #000;
      padding: 10px;
      margin-right: 15px;
    }

    select {
      font-size: 16px;
      width: 300px;
      height: 38px;
      margin: 12px 15px 7px 0px;
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #000;
      padding: 8.5px;
    }

    select option {
      color: #000;
    }

    button {
      font-size: 16px;
      border-radius: 4px;
      border: 0;
      height: 38px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      background-color: #04d361;
      transition: background 0.2s;

      &:hover {
        background-color: #00b652;
      }
    }
  }
`;
