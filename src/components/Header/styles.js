import styled from 'styled-components';
import { darken } from 'polished';

export const Head = styled.header`
  width: 100%;
  background: #252527;
  display: flex;

  justify-content: space-between;
  height: 60px;
  color: #fff;
  padding: 0 60px;
`;

export const Title = styled.header`
  display: flex;
  align-items: center;

  img {
    margin-top: -5px;
    width: 200px;
    height: 200px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    font-size: 18px;
    margin-right: 20px;
    margin-top: 11px;
    padding-right: 5px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  button {
    outline: none;
    background: none;
    color: #fff;
    background: #db0b3d;
    box-shadow: 0 0 5px #db0b3d, 0 0 10px #db0b3d, 0 0 1px #db0b3d;
    border: none;
    font-size: 18px;
    margin-top: 11px;
    padding: 4px 12px;
    border-radius: 4px;
    margin-right: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#DB0B3D')};
    }
  }

  a:hover {
    color: #00b652;
  }
`;
