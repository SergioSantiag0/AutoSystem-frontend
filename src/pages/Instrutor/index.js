import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

import { AiFillExclamationCircle } from 'react-icons/ai';
import api from '../../services/api';

import { Container, Title, Content, Table } from './styles';

import Header from '../../components/Header';
import EditarInstrutor from '../../components/EditarInstrutor';

export default function Instrutor() {
  const [veiculos, setVeiculos] = useState([]);
  const [instrutores, setInstrutores] = useState([]);

  const [exibir, setExibir] = useState(false);

  // Usado no editar instrutor
  const [instrutor, setInstrutor] = useState([]);

  useEffect(() => {
    api
      .get('/veiculos')
      .then(res => {
        setVeiculos(res.data);
      })
      .catch(error => {
        setVeiculos([]);
      });

    api
      .get('/instrutores')
      .then(res => {
        setInstrutores(res.data);
      })
      .catch(error => {
        setInstrutores([]);
      });
  }, []);

  veiculos.map(veiculo => {
    veiculo.title = veiculo.placa;
  });

  function handleSubmit(data) {
    api
      .post(`/instrutores`, data)
      .then(res => {
        toast.success('Instrutor cadastrado com sucesso');
      })
      .catch(error => {
        toast.error('Erro ao cadastrar, verifique os dados');
      });
    window.location.reload();
  }

  function handleUpdate(instrutor_update) {
    setInstrutor(instrutor_update);
    setExibir(true);
  }

  function handleDelete(id) {
    confirmAlert({
      title: 'Deletar cadastro',
      message: `Tem cereteza que deseja deletar o cadastro do instrutor?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            try {
              await api.delete(`/instrutores/${id}`);
              toast.success('Cadastro deletado com sucesso');
              window.location.reload();
            } catch (error) {
              toast.error('Não foi possivel deletar o cadastro do instrutor');
              window.location.reload();
            }
          },
        },
        {
          label: 'Não',
          onClick: () => {
            window.location.reload();
          },
        },
      ],
    });
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <AiFillExclamationCircle />
          <h1>Instrutores</h1>
        </Title>

        <Form onSubmit={handleSubmit}>
          <h5>Cadastrar novo instrutor</h5>
          <div className="alinhador-pai">
            <div className="alinhador">
              <p>Nome:</p>
              <Input type="text" name="nome" placeholder="Nome completo" />
            </div>
            <div className="alinhador">
              <p>Data da carteira:</p>
              <Input
                type="date"
                name="data_carteira"
                placeholder="Data da carteira"
              />
            </div>
            <div className="alinhador">
              <p>Data do curso:</p>
              <Input
                type="date"
                name="data_curso"
                placeholder="Data do curso"
              />
            </div>
            <div className="alinhador">
              <p>Veículo:</p>
              <Select
                name="veiculo_id"
                options={veiculos}
                placeholder="Veículo"
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </Form>
        <Title>
          <AiFillExclamationCircle />
          <h1>Instrutores cadastrados</h1>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data da carteira</th>
              <th>Data do curso</th>
              <th>Veículo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {instrutores.map(instrutor => (
              <tr key={instrutor.id}>
                <td>{instrutor.nome}</td>
                <td>
                  {format(parseISO(instrutor.data_carteira), 'dd/MM/yyyy')}
                </td>
                <td>{format(parseISO(instrutor.data_curso), 'dd/MM/yyyy')}</td>
                <td>{instrutor.veiculo.placa}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(instrutor)}
                    className="editar"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(instrutor.id)}
                    className="inativar"
                    type="button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <EditarInstrutor
        show={exibir}
        handleClose={() => {
          setExibir(!exibir);
          window.location.reload();
        }}
        instrutor={instrutor}
        veiculos={veiculos}
      />
    </Container>
  );
}
