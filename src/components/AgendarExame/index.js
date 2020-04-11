import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { ModalStyled, ModalHeader, ModalBody } from './styles';

export default function AgendarExame({ show, handleClose, dados }) {
  async function handleSubmit(data) {
    const { aluno_id, instrutor_id, categoria, date } = data;
    try {
      await api.post('/exames', { aluno_id, instrutor_id, categoria, date });
      toast.success('Exame agendado com sucesso');
    } catch (e) {
      toast.error('O aluno já tem um agendamento de exame em aberto');
    }
  }
  return (
    <ModalStyled show={show}>
      <ModalHeader>
        <h4>Agendar exame de direção</h4>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <div className="alinhador">
            <p>Aluno</p>
            <Input type="text" name="aluno" value={dados.nome} readOnly />
            <Input
              type="text"
              hidden
              name="aluno_id"
              value={dados.id}
              readOnly
            />
          </div>
          <div className="alinhador">
            <p>Instrutor</p>
            <Input
              type="text"
              name="instrutor"
              value={dados.instrutor}
              readOnly
            />
            <Input
              type="text"
              hidden
              name="instrutor_id"
              value={dados.instrutor_id}
              readOnly
            />
          </div>
          <div className="alinhador">
            <p>Categoria</p>
            <Input
              type="text"
              name="categoria"
              value={dados.categoria}
              readOnly
            />
          </div>
          <div className="alinhador">
            <p>Data</p>
            <Input type="date" name="date" />
          </div>
          <Button variant="success" type="submit">
            Salvar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
        </Form>
      </ModalBody>
    </ModalStyled>
  );
}
