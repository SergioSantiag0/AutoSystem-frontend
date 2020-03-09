import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)`
  margin-top: 20px;
`;

export const ModalHeader = styled(Modal.Header)`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  color: #000;
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
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
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
  background: ${props => (props.available ? '#f2f2f2' : '#fff')};
  cursor: pointer;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
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
