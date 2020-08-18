import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  /* Tabela */
  table {
    border-collapse: collapse;
    border-spacing: 0;
    color: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTextColor)'
        : 'var(--lightTextColor)'};
    background: ${props =>
      props.theme === 'dark'
        ? 'var(--darkTitleBackground)'
        : 'var(--lightTitleBackground)'};

    width: 100%;
    border-radius: 2px;

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

    td button.agendar {
      outline: none;
      padding: 8px 10px;
      color: #fff;
      margin-right: 8px;
      border-radius: 4px;
      background: #0069d9;

      border: 0;

      &:hover {
        background: ${darken(0.05, '#0069d9')};
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

    td button.exame {
      padding: 8px 10px;
      margin-left: 5px;
      border-radius: 4px;
      background: #ff6e00;
      border: 0;
      color: #fff;

      &:hover {
        background: ${darken(0.05, '#FF6E00')};
      }
    }
  }
`;

// Paginação
export const Lista = styled.ul`
  display: flex;
  background: ${props => (props.theme === 'dark' ? '#252527' : '#f2f2f2')};

  padding: 20px 10px;

  p {
    margin-right: auto;
    font-size: 18px;
    color: ${props => (props.theme === 'dark' ? '#f2f2f2' : '#252527')};
  }

  span {
    color: ${props => (props.theme === 'dark' ? '#f2f2f2' : '#252527')};
    font-weight: bold;
  }
`;

export const Numbers = styled.li`
  display: flex;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 3px;
`;

export const Link = styled.a`
  font-size: 18px;
  color: ${props => (props.theme === 'dark' ? '#f2f2f2' : '#252527')};
  margin-top: 3px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    text-decoration: none;
    color: #04d361;
  }
`;
