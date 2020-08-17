import React, { useState, useEffect, useContext } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import { Form, Input, Select } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
import * as Yup from 'yup';
import axios from 'axios';

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

export default function EditarAluno({ match }) {
  const theme = useContext(ThemeSwitcher);
  // Recebe os dados do useEffect
  const [instrutores, setInstrutores] = useState([]);
  const [veiculos, setVeiculos] = useState([]);

  const [aluno, setAluno] = useState({});

  // Estados dos selects
  const [sexo_aluno, setSexo] = useState('');
  const [uf_aluno, setUf] = useState('');
  const [ufs, setUfs] = useState([]);
  const [cidade, setCidade] = useState('');
  const [citys, setCitys] = useState([]);
  const [categoria_aluno, setCategoria] = useState('');
  const [instrutor_aluno, setInstrutor] = useState('');
  const [veiculo_aluno, setVeiculo] = useState('');
  const [ativo_aluno, setAtivo] = useState('');
  const [data_nasc, setDataNasc] = useState('');
  const [data_matric, setDataMatric] = useState('');

  // Quando o componente for montado, busca instrutores e veiculos para os selects
  useEffect(() => {
    api
      .get(`alunos/${match.params.cpf}`)
      .then(res => {
        setAluno(res.data);
        setSexo(res.data.sexo);
        setUf(res.data.uf);
        setCidade(res.data.cidade);
        setCategoria(res.data.categoria);
        setInstrutor(res.data.instrutor_id);
        setVeiculo(res.data.veiculo_id);
        setAtivo(res.data.ativo);
        setDataNasc(format(parseISO(res.data.data_nasc), 'yyyy-MM-dd'));
        setDataMatric(format(parseISO(res.data.data_matric), 'yyyy-MM-dd'));
      })
      .catch(error => {
        toast.error('Aluno não encontrado');
      });
    // Buscando veiculos e instrutores
    api
      .get('/instrutores')
      .then(res => {
        const instrutoresTitle = res.data.map(instrutor => ({
          ...instrutor,
          title: instrutor.nome,
        }));
        setInstrutores(instrutoresTitle);
      })
      .catch(error => {
        setInstrutores([]);
      });

    api
      .get('/veiculos')
      .then(res => {
        const veiculosTitle = res.data.map(veiculo => ({
          ...veiculo,
          title: veiculo.placa,
        }));
        setVeiculos(veiculosTitle);
      })
      .catch(error => setVeiculos([]));
  }, [match.params.cpf]);

  // Buscando estados do IBGE
  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufNames = response.data.map(uf => ({
          id: uf.sigla,
          title: uf.sigla,
        }));
        setUfs(ufNames);
      });
  }, []);

  // Buscando cidades do IBGE
  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf_aluno}/municipios`
      )
      .then(response => {
        const cityNames = response.data.map(city => ({
          id: city.nome,
          title: city.nome,
        }));
        setCitys(cityNames);
      });
  }, [uf_aluno]);

  const sexo = [
    { id: 'Masculino', title: 'Masculino' },
    { id: 'Feminino', title: 'Feminino' },
    { id: 'Outro', title: 'Outro' },
  ];

  const categoria = [
    { id: 'A', title: 'A' },
    { id: 'B', title: 'B' },
    { id: 'C', title: 'C' },
    { id: 'D', title: 'D' },
    { id: 'E', title: 'E' },
  ];

  const ativo = [
    { id: true, title: 'Ativo' },
    { id: false, title: 'Inativo' },
  ];

  function handleSubmit(data) {
    api
      .put(`/alunos/${aluno.id}`, data)
      .then(res => {
        toast.success('Cadastro editado com sucesso');
      })
      .catch(error => {
        toast.error('Não foi possível editar o cadastro, verifique os dados');
      });
  }
  return (
    <Container theme={theme.theme}>
      <Header />
      <Content theme={theme.theme}>
        <Title theme={theme.theme}>
          <AiFillExclamationCircle />
          <h1>Editar cadastro</h1>
        </Title>
        <Form
          initialData={aluno}
          onSubmit={handleSubmit}
          schema={schema}
          theme={theme.theme}
        >
          <h5>Dados pessoais</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <Input type="text" name="nome" placeholder="Nome completo" />

              <Input
                type="text"
                name="cpf"
                placeholder="CPF (apenas números)"
                maxLength={11}
              />

              <Input type="text" name="rg" placeholder="RG" maxLength={14} />
            </div>

            <div className="alinhador">
              <Input type="email" name="email" placeholder="E-mail" />

              <Input
                type="text"
                name="telefone"
                placeholder="Telefone"
                mask="(99) 99999-9999"
              />

              <Input
                type="date"
                name="data_nasc"
                placeholder="Data de nascimento"
                value={data_nasc}
                onChange={e => {
                  setDataNasc(e.target.value);
                }}
              />
            </div>

            <div className="alinhador">
              <Select
                placeholder="Sexo"
                name="sexo"
                options={sexo}
                value={sexo_aluno}
                onChange={e => {
                  setSexo(e.target.value);
                }}
              />

              <Input type="text" name="nome_pai" placeholder="Nome do pai" />

              <Input type="text" name="nome_mae" placeholder="Nome da mãe" />
            </div>
          </div>

          <h5>Endereço</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <Input type="text" name="endereco" placeholder="Rua" />
            </div>

            <div className="alinhador">
              <Input type="text" name="bairro" placeholder="Bairro" />
            </div>

            <div className="alinhador">
              <Select
                placeholder="Estado"
                name="uf"
                options={ufs}
                value={uf_aluno}
                onChange={e => {
                  setUf(e.target.value);
                }}
              />
            </div>

            <div className="alinhador">
              <Select
                placeholder="Cidade"
                name="cidade"
                options={citys}
                value={cidade}
                onChange={e => {
                  setCidade(e.target.value);
                }}
              />
            </div>
          </div>
          <h5>Informações adicionais</h5>
          <div className="alinhador-content">
            <div className="alinhador">
              <p>Categoria</p>
              <Select
                placeholder="categoria"
                name="categoria"
                options={categoria}
                value={categoria_aluno}
                onChange={e => {
                  setCategoria(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Instrutor</p>
              <Select
                placeholder="Instrutor"
                name="instrutor_id"
                options={instrutores}
                value={instrutor_aluno}
                onChange={e => {
                  setInstrutor(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Veículo</p>
              <Select
                placeholder="Veículo"
                name="veiculo_id"
                options={veiculos}
                value={veiculo_aluno}
                onChange={e => {
                  setVeiculo(e.target.value);
                }}
              />
            </div>
            <div className="alinhador">
              <p>Data de matrícula:</p>
              <Input
                type="date"
                name="data_matric"
                placeholder="Data de matrícula"
                value={data_matric}
                onChange={e => {
                  setDataMatric(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <h5>Informações profissionais</h5>
            <Input type="text" name="profissao" placeholder="Profissão" />
            <Input
              type="text"
              name="local_trab"
              placeholder="Local de trabalho"
            />
          </div>
          <p id="status">Status:</p>
          <Select
            placeholder="Status"
            name="ativo"
            options={ativo}
            value={ativo_aluno}
            onChange={e => {
              setAtivo(e.target.value);
            }}
          />
          <button type="submit">Salvar</button>
        </Form>
      </Content>
    </Container>
  );
}
