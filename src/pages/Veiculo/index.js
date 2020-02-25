import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { AiFillExclamationCircle } from 'react-icons/ai';
import api from '../../services/api';

import { Container, Title, Content, Table } from './styles';

import Header from '../../components/Header';
import EditarVeiculo from '../../components/EditarVeiculo';

export default function Veiculo() {
  const [veiculos, setVeiculos] = useState([]);
  const [exibir, setExibir] = useState(false);

  // Usado para editar o cadastro
  const [veiculo, setVeiculo] = useState([]);

  useEffect(() => {
    api
      .get('/veiculos')
      .then(res => {
        setVeiculos(res.data);
      })
      .catch(error => {
        setVeiculos([]);
      });
  }, []);
  function handleSubmit(data) {
    api
      .post(`/veiculos`, data)
      .then(res => {
        toast.success('Veículo cadastrado com sucesso');
      })
      .catch(error => {
        toast.error('Erro ao cadastrar, verifique os dados');
      });
  }

  function handleUpdate(veiculo_update) {
    setVeiculo(veiculo_update);
    setExibir(true);
  }

  function handleDelete(id) {
    confirmAlert({
      title: 'Deletar cadastro',
      message: `Tem cereteza que deseja deletar o cadastro do veiculo?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            try {
              await api.delete(`/veiculos/${id}`);
              toast.success('Cadastro deletado com sucesso');
            } catch (error) {
              toast.error(
                'Não foi possivel deletar o cadastro, veículo em uso'
              );
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
          <h1>Veículos</h1>
        </Title>

        <Form onSubmit={handleSubmit}>
          <h5>Cadastrar novo veículo</h5>
          <div className="alinhador-pai">
            <div className="alinhador">
              <p>Placa:</p>
              <Input
                maxLength="7"
                type="text"
                name="placa"
                placeholder="Placa"
              />
            </div>
            <div className="alinhador">
              <p>Cor:</p>
              <Input type="text" name="cor" placeholder="Cor" />
            </div>
            <div className="alinhador">
              <p>Modelo:</p>
              <Input type="text" name="modelo" placeholder="Modelo" />
            </div>
            <div className="alinhador">
              <p>Ano:</p>
              <Input type="text" name="ano" placeholder="Ano" />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </Form>
        <Title>
          <AiFillExclamationCircle />
          <h1>Veículos cadastrados</h1>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Cor</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map(veiculo => (
              <tr key={veiculo.id}>
                <td>{veiculo.placa}</td>
                <td>{veiculo.cor}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.ano}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(veiculo)}
                    className="editar"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(veiculo.id)}
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
      <EditarVeiculo
        show={exibir}
        handleClose={() => {
          setExibir(!exibir);
          window.location.reload();
        }}
        veiculo={veiculo}
      />
    </Container>
  );
}
