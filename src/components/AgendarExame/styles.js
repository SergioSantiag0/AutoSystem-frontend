import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)`
  margin-top: 20px;
`;

export const ModalHeader = styled(Modal.Header)`
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkTitleBackground)'
      : 'var(--lightTitleBackground)'};
`;

export const ModalBody = styled(Modal.Body)`
  background: ${props =>
    props.theme === 'dark'
      ? 'var(--darkBackground)'
      : 'var(--lightBackground)'};
  color: ${props =>
    props.theme === 'dark' ? 'var(--darkTextColor)' : 'var(--lightTextColor)'};
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
    background: #fff;
    color: #252527;
    padding: 10px;
    margin-right: 15px;

    &:read-only {
      background: rgba(255, 255, 255, 0.8);
      cursor: default;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  font-size: 14px;
  padding: 0 20px;
  border-radius: 4px;
  border: 0;
  margin: 15px 15px 0px 0px;
  height: 38px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => (props.close ? '#db0b3d' : '#04d361')};
  box-shadow: ${props =>
    !props.close
      ? '0 0 5px #04d361, 0 0 10px #04d361, 0 0 1px #04d361'
      : ' 0 0 5px #db0b3d, 0 0 10px #db0b3d, 0 0 1px #db0b3d'};

  transition: background 0.2s;

  &:hover {
    background-color: ${props => (props.close ? '#AA092F' : '#00833B')};
  }
`;
