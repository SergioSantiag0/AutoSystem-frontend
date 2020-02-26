import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { ModalStyled, ModalHeader, ModalBody } from './styles';

import api from '../../services/api';

export default function EditarVeiculo({ show, handleClose, veiculo }) {
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    setPlaca(veiculo.placa);
    setCor(veiculo.cor);
    setModelo(veiculo.modelo);
    setAno(veiculo.ano);
  }, [veiculo.ano, veiculo.cor, veiculo.modelo, veiculo.placa]);

  async function handleSubmit(data) {
    api
      .put(`/veiculos/${veiculo.id}`, data)
      .then(res => {
        toast.success('Cadastro editato com sucesso');
      })
      .catch(res => {
        toast.error('Não foi possivel editar o cadastro');
      });
  }

  return (
    <ModalStyled show={show}>
      <ModalHeader>
        <h4>Editar cadastro</h4>
      </ModalHeader>
      <Modal.Body>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <div className="alinhador">
              <p>Placa:</p>
              <Input
                value={placa}
                type="text"
                name="placa"
                placeholder="Placa"
                onChange={e => {
                  setPlaca(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Cor:</p>
              <Input
                type="text"
                name="cor"
                placeholder="Cor"
                value={cor}
                onChange={e => {
                  setCor(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Modelo:</p>
              <Input
                type="text"
                name="modelo"
                placeholder="Modelo"
                value={modelo}
                onChange={e => {
                  setModelo(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Ano:</p>
              <Input
                type="text"
                name="ano"
                placeholder="Ano"
                value={ano}
                onChange={e => {
                  setAno(e.target.value);
                }}
              />
            </div>
            <Button variant="success" type="submit">
              Salvar
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Fechar
            </Button>
          </Form>
        </ModalBody>
      </Modal.Body>
    </ModalStyled>
  );
}