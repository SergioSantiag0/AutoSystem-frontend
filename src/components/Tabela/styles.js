import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  /* Tabela */
  table {
    border-collapse: collapse;
    border-spacing: 0;
    background: #fff;
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

    td button.agendar {
      padding: 8px 10px;
      color: #fff;
      margin-right: 5px;
      border-radius: 4px;
      background: #0069d9;
      border: 0;

      &:hover {
        background: ${darken(0.05, '#0069d9')};
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
  }
`;

// Paginação
export const Lista = styled.ul`
  display: flex;
  background: #17171a;
  padding: 20px 10px;
  border-bottom: 1px solid #fff;

  p {
    margin-right: auto;
    font-size: 18px;
    color: #fff;
  }

  span {
    color: #fff;
    font-weight: bold;
  }
`;

export const Numbers = styled.li`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  border: 1px solid #fff;
  margin-right: 3px;
`;

export const Link = styled.a`
  font-size: 18px;
  color: #fff;
  margin-top: 3px;
  text-decoration: none;
`;
