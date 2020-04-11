import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #253138;
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
  padding: 10px;

  table {
    margin-top: 20px;
    background: #fff;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border-radius: 2px;

    tr {
      text-align: center;
      height: 50px;
      border-bottom: 1px solid #ccc;
    }

    td {
      font-size: 17px;

      &.delete_button {
        padding: 0 10px;
        text-align: left;
        font-size: 20px;

        svg {
          &:hover {
            color: #f64c75;
            cursor: pointer;
          }
        }
      }

      button {
        padding: 8px 10px;
        color: #fff;
        margin-right: 5px;
        border-radius: 4px;
        border: 0;

        &.approved {
          background: #04d361;

          &:hover {
            background: ${darken(0.08, '#04d361')};
          }
        }

        &.disapproved {
          background: #f64c75;

          &:hover {
            background: ${darken(0.08, '#f64c75')};
          }
        }
      }
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
        background-color: #f2f2f2;
      }
      tr:nth-child(even) {
        background-color: #fff;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  background: #2f3e47;
  margin-top: 10px;
  border-radius: 2px;
  align-items: center;

  svg {
    font-size: 30px;
    margin-right: 15px;
    color: #f2f2f2;
    margin-bottom: 8px;
  }
  h1 {
    color: #f2f2f2;
    font-size: 30px;
  }

  select {
    font-size: 16px;
    width: 300px;
    height: 38px;
    margin: 5px 0;
    border: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-right: 0;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px;

    option {
      background: #253138;
    }
  }

  button {
    font-size: 14px;
    padding: 0 10px;
    border-radius: 4px;
    border: 0;
    margin-right: 30px;
    height: 38px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    background-color: #17a2b8;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#17a2b8')};
    }
  }
`;
