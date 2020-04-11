import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)`
  margin-top: 20px;
`;

export const ModalHeader = styled(Modal.Header)`
  background: #f2f2f2;
  color: #000;
`;

export const ModalBody = styled(Modal.Body)`
  background: #2f3e47;
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
    cursor: pointer;
    font-size: 16px;
    width: 270px;
    height: 38px;
    margin: 2px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #17171a;
    background: #f2f2f2;
    padding: 10px;
    margin-right: 15px;

    &:read-only {
      background: #c6c6c6;
      cursor: default;
    }
  }

  button {
    margin-top: 20px;
    margin-right: 20px;
  }
`;
