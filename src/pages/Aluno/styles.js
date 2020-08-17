import styled from 'styled-components';

export const Container = styled.div`
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkBackground)'
      : 'var(--lightBackground)'};
`;

export const Title = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 4px;

  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
  border-radius: 2px;

  svg {
    font-size: 30px;
    margin-right: 15px;
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
  }
  h1 {
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
    font-size: 30px;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
  border-radius: 4px;
  padding: 10px;

  form {
    background: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTitleBackground)'
        : 'var(--lightTitleBackground)'};
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;

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
      color: ${props =>
        props.theme === 'dark'
          ? 'var(--darkTextColor)'
          : 'var(--lightTextColor)'};
    }

    span {
      color: #fb6f91;
      margin-bottom: 10px;
      align-self: flex-start;
    }

    p {
      color: ${props =>
        props.theme === 'dark'
          ? 'var(--darkTextColor)'
          : 'var(--lightTextColor)'};
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
      color: #252527;
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
      color: #252527;
      padding: 8.5px;
    }

    select option {
      color: #252527;
    }

    button {
      font-size: 16px;
      border-radius: 4px;
      margin-top: 10px;
      border: 0;
      height: 38px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      background-color: #04d361;
      box-shadow: 0 0 5px #04d361, 0 0 3px #04d361, 0 0 1px #04d361;
      transition: background 0.2s;

      &:hover {
        background-color: #00b652;
      }
    }
  }
`;
