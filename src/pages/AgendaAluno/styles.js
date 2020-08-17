import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkBackground)'
      : 'var(--lightBackground)'};
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
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
  border-radius: 4px;
  align-items: center;

  div.title {
    display: flex;
    margin-bottom: 10px;

    svg {
      margin-top: 3px;
      margin-right: 10px;
    }
  }

  div.dates {
    display: flex;
    width: 100%;
    justify-content: space-around;
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
  }

  button.add {
    outline: none;
    background-color: #00b652;
    box-shadow: 0 0 5px #00b652, 0 0 10px #00b652, 0 0 1px #00b652;
    border: 0;
    width: 30px;
    height: 30px;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    margin-right: 30px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#00b652')};
    }
  }

  button.clear {
    outline: none;
    background-color: #ff7812;
    box-shadow: 0 0 5px #ff7812, 0 0 10px #ff7812, 0 0 1px #ff7812;
    border: 0;
    height: 30px;
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    margin-right: 15px;
    padding: 0 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#FF7812')};
    }
  }

  button.exam {
    outline: none;
    background-color: #7159c1;
    box-shadow: 0 0 5px #7159c1, 0 0 10px #7159c1, 0 0 1px #7159c1;
    border: 0;
    height: 30px;
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    margin-right: 15px;
    padding: 0 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#7159c1')};
    }
  }
`;

export const Aula = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: flex;
    align-items: center;
    color: #00b652;
    font-size: 20px;
    font-weight: normal;

    svg {
      margin-right: 7px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 3px;
    color: #666;
    font-size: 20px;

    svg {
      margin-top: 3px;
      margin-right: 7px;
    }
  }

  ${props =>
    !props.past
      ? css`
          button {
            margin-top: 6px;
            border: none;
            background-color: #f42557;
            box-shadow: 0 0 5px #f42557, 0 0 10px #f42557, 0 0 1px #f42557;
            padding: 8px;
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
