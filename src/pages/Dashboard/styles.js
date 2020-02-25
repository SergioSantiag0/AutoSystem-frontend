import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  background: #17171a;
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
  background: #fff;
  border-radius: 2px;
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
      background: rgba(0, 0, 0, 0.1);
      color: #000;
      padding: 10px;
    }

    button {
      border: 0;
      background: none;
      margin-top: 3px;
    }
  }

  button.exibir_todos {
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
  }

  button.add_aluno {
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
    transition: background 0.2s;
  }
`;

export const Icone = styled(MdSearch)`
  font-size: 38px;
  padding: 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #04d361;
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background-color: #00b652;
  }
`;
