import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)``;

export const ModalHeader = styled(Modal.Header)``;

export const ModalBody = styled.div`
  color: #fff;
  div.alinhador {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  input {
    font-size: 16px;
    width: 270px;
    height: 38px;
    margin: 2px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
    padding: 10px;
    margin-right: 15px;
  }

  select {
    font-size: 16px;
    width: 270px;
    height: 38px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
    padding: 8.5px;
  }

  button {
    margin-top: 10px;
    margin-right: 10px;
  }

  span {
    color: #fb6f91;
    margin-bottom: 10px;
    align-self: flex-start;
  }
`;
