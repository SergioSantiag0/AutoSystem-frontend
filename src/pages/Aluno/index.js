import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { AiFillExclamationCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Title, Content } from './styles';

// Validações
const schema = Yup.object().shape({
  nome: Yup.string().required('O nome do candidato é obrigatório'),
  email: Yup.string().email('Insira um e-mail, válido'),
  cpf: Yup.string()
    .max(11)
    .required('O CPF é obrigátorio'),
  rg: Yup.string()
    .max(14)
    .required('O RG é obrigatório'),
  telefone: Yup.string()
    .max(11)
    .required('O telefone é obrigatório'),
  data_nasc: Yup.string().required('Informe a data de nascimento'),
  sexo: Yup.string().required('Informe o sexo'),
  nome_pai: Yup.string(),
  nome_mae: Yup.string(),
  endereco: Yup.string().required('A rua é obrigatória'),
  bairro: Yup.string().required('O bairro é obrigatório'),
  cidade: Yup.string().required('A cidade é obrigatória'),
  uf: Yup.string().required('O estado é obrigatório'),
  categoria: Yup.string().required('A categoria é obrigatória'),
  instrutor_id: Yup.string().required('Informe o instrutor'),
  veiculo_id: Yup.string().required('Informe o veículo'),
  data_matric: Yup.string().required('A data de matrícula é obrigatória'),
  profissao: Yup.string(),
  local_trab: Yup.string(),
  ativo: Yup.string().required('Informe o status do candidato'),
});

export default function Aluno() {
  // Recebe os dados do useEffect
  const [instrutores, setInstrutores] = useState([]);
  const [veiculos, setVeiculos] = useState([]);

  // Quando o componente for montado, busca instrutores e veiculos para os selects
  useEffect(() => {
    api
      .get('/instrutores')
      .then(res => {
        setInstrutores(res.data);
      })
      .catch(error => {
        setInstrutores([]);
      });

    api
      .get('/veiculos')
      .then(res => {
        setVeiculos(res.data);
      })
      .catch(error => setVeiculos([]));
  }, []);

  // Atribuindo titulo para usar nos Selects
  instrutores.map(instrutor => {
    instrutor.title = instrutor.nome;
  });

  veiculos.map(veiculo => {
    veiculo.title = veiculo.placa;
  });

  const sexo = [
    { id: 'Masculino', title: 'Masculino' },
    { id: 'Feminino', title: 'Feminino' },
    { id: 'Outro', title: 'Outro' },
  ];

  const uf = [{ id: 'MG', title: 'MG' }];

  const categoria = [
    { id: 'A', title: 'A' },
    { id: 'B', title: 'B' },
    { id: 'C', title: 'C' },
    { id: 'D', title: 'D' },
    { id: 'E', title: 'E' },
  ];

  const ativo = [
    { id: '1', title: 'Ativo' },
    { id: '0', title: 'Inativo' },
  ];

  function handleSubmit(data) {
    api
      .get(`/alunos/${data.cpf}`)
      .then(res => toast.error('O aluno já está cadastrado'))
      .catch(error => {
        api
          .post(`/alunos`, data)
          .then(toast.success('Aluno cadastrado com sucesso'))
          .catch(error => {
            'Erro ao realizar o cadastro, confira os dados';
          });
      });
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <AiFillExclamationCircle />
          <h1>Cadastro de alunos</h1>
        </Title>
        <Form onSubmit={handleSubmit} schema={schema}>
          <h5>Dados pessoais</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <Input
                autoComplete="off"
                type="text"
                name="nome"
                placeholder="Nome completo"
              />

              <Input
                autoComplete="off"
                type="text"
                name="cpf"
                placeholder="CPF (apenas números)"
                maxLength={11}
              />

              <Input
                autoComplete="off"
                type="text"
                name="rg"
                placeholder="RG"
                maxLength={14}
              />
            </div>

            <div className="alinhador">
              <Input
                autoComplete="off"
                type="email"
                name="email"
                placeholder="E-mail"
              />

              <Input
                autoComplete="off"
                type="text"
                name="telefone"
                placeholder="Telefone"
                maxLength={11}
              />

              <Input
                autoComplete="off"
                type="date"
                title="Data"
                name="data_nasc"
              />
            </div>

            <div className="alinhador">
              <Select
                autoComplete="off"
                placeholder="Sexo"
                name="sexo"
                options={sexo}
              />

              <Input
                autoComplete="off"
                type="text"
                name="nome_pai"
                placeholder="Nome do pai"
              />

              <Input
                autoComplete="off"
                type="text"
                name="nome_mae"
                placeholder="Nome da mãe"
              />
            </div>
          </div>

          <h5>Endereço</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <Input
                autoComplete="off"
                type="text"
                name="endereco"
                placeholder="Rua"
              />
            </div>

            <div className="alinhador">
              <Input
                autoComplete="off"
                type="text"
                name="bairro"
                placeholder="Bairro"
              />
            </div>

            <div className="alinhador">
              <Input
                autoComplete="off"
                type="text"
                name="cidade"
                placeholder="Cidade"
              />
            </div>

            <div className="alinhador">
              <Select
                autoComplete="off"
                placeholder="Estado"
                name="uf"
                options={uf}
              />
            </div>
          </div>
          <h5>Informações adicionais</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <p>Categoria</p>
              <Select
                autoComplete="off"
                placeholder="categoria"
                name="categoria"
                options={categoria}
              />
            </div>
            <div className="alinhador">
              <p>Instrutor</p>
              <Select
                autoComplete="off"
                placeholder="Instrutor"
                name="instrutor_id"
                options={instrutores}
              />
            </div>
            <div className="alinhador">
              <p>Veículo</p>
              <Select
                autoComplete="off"
                placeholder="Veículo"
                name="veiculo_id"
                options={veiculos}
              />
            </div>
            <div className="alinhador">
              <p>Data de matrícula:</p>
              <Input
                autoComplete="off"
                type="date"
                name="data_matric"
                placeholder="Data de matrícula"
              />
            </div>
          </div>
          <div>
            <h5>Informações profissionais</h5>
            <Input
              autoComplete="off"
              type="text"
              name="profissao"
              placeholder="Profissão"
            />
            <Input
              autoComplete="off"
              type="text"
              name="local_trab"
              placeholder="Local de trabalho"
            />
          </div>
          <p id="status">Status:</p>
          <Select
            autoComplete="off"
            placeholder="Status"
            name="ativo"
            options={ativo}
          />
          <button type="submit">Salvar</button>
        </Form>
      </Content>
    </Container>
  );
}
