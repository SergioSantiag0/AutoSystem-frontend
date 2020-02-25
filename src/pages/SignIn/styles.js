import styled from 'styled-components';

export const Container = styled.div`
  background: #17171a;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: -40px;

    input {
      font-size: 16px;
      width: 300px;
      height: 38px;
      margin: 5px 0;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      padding: 10px;
    }

    span {
      color: #f64c75;
    }

    button {
      margin-top: 10px;
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

  a {
    margin-top: 20px;
    align-self: center;
    text-decoration: none;
    font-size: 14px;
    color: #fd8906;
  }

  img {
    margin-top: -80px;
    width: 200px;
    height: 200px;
  }
`;
