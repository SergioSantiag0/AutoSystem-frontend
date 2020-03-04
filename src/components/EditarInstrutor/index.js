import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Input, Select, Form } from '@rocketseat/unform';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';
import { ModalStyled, ModalHeader, ModalBody } from './styles';

import api from '../../services/api';

export default function EditarInstrutor({
  show,
  handleClose,
  instrutor,
  veiculos,
}) {
  const [nome, setNome] = useState('');
  const [data_carteira, setData_carteira] = useState('');
  const [data_curso, setData_curso] = useState('');
  const [veiculo, setVeiculo] = useState('');

  useEffect(() => {
    setNome(instrutor.nome);
    setVeiculo(instrutor.veiculo);
    if (
      instrutor.data_carteira !== undefined &&
      instrutor.data_curso !== undefined
    ) {
      setData_carteira(format(parseISO(instrutor.data_carteira), 'yyyy-MM-dd'));
      setData_curso(format(parseISO(instrutor.data_curso), 'yyyy-MM-dd'));
    } else {
      setData_carteira(instrutor.data_carteira);
      setData_curso(instrutor.data_curso);
    }
  }, [
    instrutor.nome,
    instrutor.data_carteira,
    instrutor.data_curso,
    instrutor.veiculo,
  ]);

  async function handleSubmit(data) {
    try {
      await api.put(`/instrutores/${instrutor.id}`, data);
      await toast.success('Cadastro editato com sucesso');
    } catch (error) {
      toast.error('Não foi possivel editar o cadastro');
    }
  }

  return (
    <ModalStyled show={show}>
      <ModalHeader>
        <h4>Editar cadastro</h4>
      </ModalHeader>
      <Modal.Body style={{ background: '#2f3e47' }}>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <div className="alinhador">
              <p>Nome:</p>
              <Input
                value={nome}
                type="text"
                name="nome"
                placeholder="Nome completo"
                onChange={e => {
                  setNome(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Data da carteira:</p>
              <Input
                type="date"
                name="data_carteira"
                placeholder="Data da carteira"
                value={data_carteira}
                onChange={e => {
                  setData_carteira(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Data do curso:</p>
              <Input
                type="date"
                name="data_curso"
                placeholder="Data do curso"
                value={data_curso}
                onChange={e => {
                  setData_curso(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Veículo:</p>
              <Select
                name="veiculo_id"
                options={veiculos}
                placeholder="Veículo"
                value={veiculo}
                onChange={e => {
                  setVeiculo(e.target.value);
                }}
              />
            </div>
            <Button type="submit" variant="success">
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
