import styled from 'styled-components';
import { darken } from 'polished';

export const Head = styled.header`
  width: 100%;
  background: #17171a;
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
    margin-top: 2px;
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
    padding-right: 10px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  button {
    background: none;
    color: #fff;
    background: ${darken(0.1, '#f42557')};
    border: none;
    font-size: 18px;
    margin-top: 11px;
    padding: 4px 12px;
    border-radius: 4px;
    margin-right: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.2, '#f42557')};
    }
  }

  li:hover {
    border-bottom: 3px solid #eee;
  }
`;
