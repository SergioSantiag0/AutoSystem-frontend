import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
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
  border-radius: 4px;
  padding: 10px;
`;

export const Search = styled.div`
  display: flex;
  padding: 10px 20px;
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};

  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 28px;
  }

  div {
    display: flex;
    align-items: center;
    input {
      font-size: 16px;
      width: 300px;
      height: 38px;
      margin: 5px 0;
      border: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      margin-right: 0;
      background: ${props =>
        props.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.08)'};
      color: ${props =>
        props.theme === 'dark'
          ? 'var(--darkTextColor)'
          : 'var(--lightTextColor)'};
      padding: 10px;

      ::placeholder {
        color: ${props =>
          props.theme === 'dark'
            ? 'var(--darkTextColor)'
            : 'var(--lightTextColor)'};
      }
    }

    button {
      border: 0;
      background: none;
    }
  }

  button.exibir_todos {
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

  button.add_aluno {
    outline: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 4px;
    border: 0;
    margin-right: 120px;
    height: 38px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    background-color: #04d361;
    box-shadow: 0 0 5px #04d361, 0 0 10px #04d361, 0 0 1px #04d361;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#04d361')};
    }
  }
`;

export const Icone = styled(MdSearch)`
  outline: none;
  font-size: 38px;
  padding: 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #04d361;
  box-shadow: 0 0 5px #04d361, 0 0 10px #04d361, 0 0 1px #04d361;
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background-color: #00b652;
  }
`;
