import React, { useState, useEffect, useContext } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import { Form, Input, Select } from '@rocketseat/unform';
import Swal from 'sweetalert2';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { AiFillExclamationCircle } from 'react-icons/ai';
import { cpf } from 'cpf-cnpj-validator';
import api from '../../services/api';

import { Container, Title, Content, Table } from './styles';

import Header from '../../components/Header';
import EditarInstrutor from '../../components/EditarInstrutor';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome do instrutor é obrigatório'),
  cpf: Yup.string()
    .max(11)
    .required('O CPF é obrigátorio'),
  data_carteira: Yup.string().required('Informe a data da carteira'),
  data_curso: Yup.string().required('Informe a data do curso'),
  veiculo_id: Yup.string().required('Informe o veículo'),
});

export default function Instrutor() {
  const [veiculos, setVeiculos] = useState([]);
  const [instrutores, setInstrutores] = useState([]);
  const theme = useContext(ThemeSwitcher);

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
    return (veiculo.title = veiculo.placa);
  });

  function handleSubmit(data) {
    console.log(data);
    if (cpf.isValid(data.cpf)) {
      api
        .post(`/instrutores`, data)
        .then(res => {
          toast.success('Instrutor cadastrado com sucesso');
        })
        .catch(error => {
          toast.error('Erro ao cadastrar, verifique os dados');
        });
      window.location.reload();
    } else {
      toast.error('Informe um CPF válido');
    }
  }

  function handleUpdate(instrutor_update) {
    setInstrutor(instrutor_update);
    setExibir(true);
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Deletar Cadastro',
      icon: 'warning',
      type: 'warning',
      text: 'Tem cereteza que deseja deletar o cadastro do instrutor?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        await api.delete(`/instrutores/${id}`);
        toast.success('Cadastro deletado com sucesso');
        window.location.reload();
      }
    });
  }

  return (
    <Container theme={theme.theme}>
      <Header />
      <Content theme={theme.theme}>
        <Title theme={theme.theme}>
          <AiFillExclamationCircle />
          <h1>Instrutores</h1>
        </Title>

        <Form onSubmit={handleSubmit} schema={schema}>
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
              <p>CPF:</p>
              <Input
                type="text"
                name="cpf"
                placeholder="CPF (apenas números)"
                maxLength={11}
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
        <Title theme={theme.theme}>
          <h1>Instrutores cadastrados</h1>
        </Title>
        <Table theme={theme.theme}>
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
