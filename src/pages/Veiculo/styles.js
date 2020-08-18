import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkBackground)'
      : 'var(--lightBackground)'};
  height: 100%;
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
  padding: 10px;

  h5 {
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
    font-size: 24px;
  }

  form {
    background: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTitleBackground)'
        : 'var(--lightTitleBackground)'};
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;

    div.alinhador-pai {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
    }

    div.alinhador {
      display: flex;
      flex-direction: column;
    }

    p {
      color: ${props =>
        props.theme === 'dark'
          ? 'var(--darkTextColor)'
          : 'var(--lightTextColor)'};
      font-size: 16px;
      margin-top: 10px;
    }

    input {
      font-size: 16px;
      width: 270px;
      height: 38px;
      margin: 10px 0;
      border: 1px solid #ccc;
      text-transform: uppercase;
      border-radius: 4px;
      color: #252527;
      padding: 10px;
      margin-right: 15px;
    }

    select {
      font-size: 16px;
      width: 270px;
      height: 38px;
      margin: 12px 15px 7px 0px;
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #252527;
      padding: 8.5px;
    }

    button {
      outline: none;
      font-size: 14px;
      padding: 0 10px;
      border-radius: 4px;
      border: 0;
      margin-top: 10px;
      height: 38px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      background-color: #04d361;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#04d361')};
      }
    }

    span {
      color: #fb6f91;
      margin-bottom: 10px;
      align-self: flex-start;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  padding: 10px 20px;
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;

  svg {
    font-size: 30px;
    margin-right: 15px;
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
    margin-bottom: 8px;
  }
  h1 {
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
    font-size: 30px;
  }
`;

export const Table = styled.table`
  /* Tabela */

  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
  width: 100%;

  tr {
    text-align: center;
    height: 50px;
  }

  td {
    font-size: 17px;
  }

  /* Cabeçalho */
  thead {
    tr {
      font-family: 'Roboto', sans-serif;
      height: 50px;
    }
    th {
      font-size: 18px;
    }
  }

  /* Corpo */
  tbody {
    tr:nth-child(odd) {
      background-color: ${props =>
        props.theme === 'dark'
          ? 'var(--tableRowDarkOdd)'
          : 'var(--tableRowLightOdd)'};
    }
    tr:nth-child(even) {
      background-color: ${props =>
        props.theme === 'dark'
          ? 'var(--tableRowDarkEven)'
          : 'var(--tableRowLightEven)'};
    }
  }

  td button.editar {
    outline: none;
    padding: 8px 10px;
    margin-right: 8px;
    border-radius: 4px;
    color: #f1f1f1;
    background: #ffc107;

    border: 0;

    &:hover {
      background: ${darken(0.05, '#ffc107')};
    }
  }

  td button.inativar {
    outline: none;
    padding: 8px 10px;
    color: #fff;
    border-radius: 4px;
    background: #f64c75;

    border: 0;

    &:hover {
      background: ${darken(0.05, '#f64c75')};
    }
  }
`;
