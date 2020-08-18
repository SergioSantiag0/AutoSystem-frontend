import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)`
  margin-top: 20px;
`;

export const ModalHeader = styled(Modal.Header)`
  display: flex;
  flex-direction: column;
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
  font-weight: bold;

  h5 {
    align-self: center;
    font-size: 24px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  span {
    margin-top: 5px;
    font-size: 20px;
  }
`;

export const ModalBody = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
      outline: none;
    }

    strong {
      color: ${props =>
        props.theme === 'dark'
          ? 'var(--darkTextColor)'
          : 'var(--lightTextColor)'};
      font-size: 24px;
      margin: 0 7px 0px 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Aula = styled.li`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: 0 0 0 1px #fff;
  background: ${props => (props.available ? '#f2f2f2' : '#fff')};
  cursor: pointer;

  &.selected {
    border: 3px solid #00b652;
  }

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: flex;
    align-items: center;
    color: ${props => (props.available ? '#999' : '#00b652')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#00b652')};
    font-size: 20px;
  }
`;

export const Button = styled.button`
  outline: none;
  font-size: 14px;
  padding: 0 20px;
  border-radius: 4px;
  border: 0;
  margin-right: ${props => (props.close ? '150px' : '0px')};
  height: 38px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => (props.close ? '#db0b3d' : '#04d361')};

  transition: background 0.2s;

  &:hover {
    background-color: ${props => (props.close ? '#AA092F' : '#00833B')};
  }
`;
