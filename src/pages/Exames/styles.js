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
    margin-top: 20px;
    border-radius: 2px;

    tr {
      text-align: center;
      height: 50px;
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
        outline: none;
        color: #fff;
        margin-right: 10px;
        border-radius: 4px;
        border: 0;

        &.approved {
          background-color: #04d361;
          box-shadow: 0 0 5px #04d361, 0 0 10px #04d361, 0 0 1px #04d361;

          &:hover {
            background: ${darken(0.08, '#04d361')};
          }
        }

        &.disapproved {
          background-color: #f64c75;
          box-shadow: 0 0 5px #f64c75, 0 0 10px #f64c75, 0 0 1px #f64c75;

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
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
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

  select {
    font-size: 16px;
    width: 300px;
    height: 38px;
    margin: 5px 0;
    border: 0;
    border-radius: 4px;
    margin-right: 0;
    background: ${props =>
      props.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.08)'};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#252527')};
    padding: 8px;

    option {
      background: ${props =>
        props.theme === 'dark' ? '#252527' : 'rgba(0, 0, 0, 0.08)'};
    }
  }

  button {
    outline: none;
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
    box-shadow: 0 0 5px #17a2b8, 0 0 10px #17a2b8, 0 0 1px #17a2b8;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#17a2b8')};
    }
  }
`;
