import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Input, Select, Form } from '@rocketseat/unform';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';
import { ModalStyled, ModalHeader, ModalBody } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome do instrutor é obrigatório'),
  data_carteira: Yup.string().required('Informe a data da carteira'),
  data_curso: Yup.string().required('Informe a data do curso'),
  veiculo_id: Yup.string().required('Informe o veículo'),
});

export default function EditarInstrutor({
  show,
  handleClose,
  instrutor,
  veiculos,
}) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data_carteira, setData_carteira] = useState('');
  const [data_curso, setData_curso] = useState('');
  const [veiculo, setVeiculo] = useState('');

  useEffect(() => {
    setNome(instrutor.nome);
    setCpf(instrutor.cpf);
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
    instrutor.cpf,
    instrutor.password,
    instrutor,
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
          <Form onSubmit={handleSubmit} schema={schema}>
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
              <p>CPF:</p>
              <Input
                value={cpf}
                type="text"
                name="cpf"
                placeholder="CPF"
                onChange={e => {
                  setCpf(e.target.value);
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
