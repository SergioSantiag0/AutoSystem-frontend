import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #253138;
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
  border-radius: 4px;
  padding: 10px;

  h5 {
    font-size: 24px;
  }

  form {
    background: #f2f2f2;
    border-radius: 2px;
    margin-top: 20px;
    padding: 20px;

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
      font-size: 16px;
      margin-top: 5px;
    }

    input {
      font-size: 16px;
      width: 270px;
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
      width: 270px;
      height: 38px;
      margin: 12px 15px 7px 0px;
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #000;
      padding: 8.5px;
    }

    button {
      font-size: 16px;
      border-radius: 4px;
      border: 0;
      height: 38px;
      width: 60px;
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

export const Title = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 10px 20px;
  background: #2f3e47;
  border-radius: 2px;
  align-items: center;

  svg {
    font-size: 30px;
    margin-right: 15px;
    margin-bottom: 8px;
    color: #f2f2f2;
  }
  h1 {
    color: #f2f2f2;
    font-size: 30px;
  }
`;

export const Table = styled.table`
  /* Tabela */

  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  background: #fff;
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
      height: 50px;
    }
    th {
      font-size: 18px;
    }
  }

  /* Corpo */
  tbody {
    tr:nth-child(odd) {
      background-color: #ddd;
    }
    tr:nth-child(even) {
      background-color: #fff;
    }
  }

  td button.editar {
    padding: 8px 10px;
    margin-right: 5px;
    border-radius: 4px;
    background: #ffc107;
    border: 0;

    &:hover {
      background: ${darken(0.05, '#ffc107')};
    }
  }

  td button.inativar {
    padding: 8px 10px;
    color: #fff;
    border-radius: 4px;
    background: #f64c75;
    border: 0;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
