import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #253138;
  height: 150%;
`;

export const Content = styled.div`
  width: 90%;
  margin: 20px auto;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #2f3e47;
  color: #fff;
  border-radius: 2px;
  align-items: center;

  div {
    display: flex;
  }
  svg {
    font-size: 30px;
    margin-right: 10px;
  }

  h1 {
    margin-top: 5px;
    font-size: 24px;
    font-weight: normal;
  }

  span {
    font-size: 20px;
    margin-right: 20px;
  }

  button {
    background: #00b652;
    border: 0;
    width: 30px;
    height: 30px;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    margin-right: 15px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#00b652')};
    }
  }
`;

export const Aula = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: #00b652;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
    font-size: 20px;
  }

  ${props =>
    !props.past
      ? css`
          button {
            margin-top: 5px;
            border: none;
            background: #f42557;
            padding: 5px;
            color: #fff;
            border-radius: 4px;

            &:hover {
              background: ${darken(0.1, '#f42557')};
            }
          }
        `
      : css`
          button {
            display: none;
          }
        `}
`;
