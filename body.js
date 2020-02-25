import React, { useEffect, useState } from 'react';

import InputMask from 'react-input-mask';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Title, Content } from './styles';

export default function Aluno() {
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

  // Recebe os dados do useEffect
  const [instrutores, setInstrutores] = useState([]);
  const [veiculos, setVeiculos] = useState([]);

  // Campos de formulario
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [data_nasc, setDataNasc] = useState('');
  const [sexo, setSexo] = useState('');
  const [nome_pai, setNomePai] = useState('');
  const [nome_mae, setNomeMae] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [categoria, setCategoria] = useState('');
  const [instrutor_id, setInstrutor] = useState('');
  const [veiculo_id, setVeiculo] = useState('');
  const [data_matric, setDataMatric] = useState('');
  const [profissao, setProfissao] = useState('');
  const [local_trab, setLocalTrab] = useState('');
  const [ativo, setAtivo] = useState('');

  // Recebe todos os valores dos inputs no objeto aluno
  const dados_aluno = {
    nome,
    cpf,
    rg,
    telefone,
    email,
    data_nasc,
    sexo,
    nome_pai,
    nome_mae,
    endereco,
    bairro,
    cidade,
    uf,
    categoria,
    instrutor_id,
    veiculo_id,
    data_matric,
    profissao,
    local_trab,
    ativo,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nome === '' ||
      cpf === '' ||
      rg === '' ||
      telefone === '' ||
      data_nasc === '' ||
      sexo === '' ||
      endereco === '' ||
      bairro === '' ||
      cidade === '' ||
      uf === '' ||
      categoria === '' ||
      instrutor_id === '' ||
      veiculo_id === '' ||
      data_matric === '' ||
      ativo === ''
    ) {
      toast.error('Não foi possível realizar o cadastro, confira os dados');
    }

    const aluno = dados_aluno; // Recebe todos os dados dos inputs

    aluno.cpf = aluno.cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
    aluno.telefone = aluno.telefone.replace(/\D/g, '');
    // Colocar esse if dentro do else do if de cima, para exibir só um toast
    if (aluno.cpf) {
      api
        .get(`/alunos/${aluno.cpf}`)
        .then(res => {
          toast.error('O aluno já está cadastrado');
        })
        .catch(error => {
          api
            .post('alunos', aluno)
            .then(res => {
              toast.success('Aluno cadastrado com sucesso!');
            })
            .catch(error => {
              toast.error(
                'Não foi possível realizar o cadastro, verifique os dados informados'
              );
            });
        });
    } else {
      aluno.cpf = '';
    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <AiFillExclamationCircle />
          <span>Cadastro de alunos</span>
        </Title>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Dados pessoais</span>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              onChange={e => {
                setNome(e.target.value);
              }}
              value={nome}
            />

            <InputMask
              type="text"
              name="cpf"
              placeholder="Digite o CPF do aluno"
              mask="999.999.999-99"
              onChange={e => {
                setCpf(e.target.value);
              }}
              value={cpf}
            />

            <input
              type="text"
              name="rg"
              placeholder="RG"
              onChange={e => {
                setRg(e.target.value);
              }}
              value={rg}
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={e => {
                setEmail(e.target.value);
              }}
              value={email}
            />

            <InputMask
              type="text"
              name="telefone"
              placeholder="Telefone"
              mask="(99) 99999-9999"
              onChange={e => {
                setTelefone(e.target.value);
              }}
              value={telefone}
            />

            <input
              type="date"
              name="data_nasc"
              placeholder="Data de nascimento"
              onChange={e => {
                setDataNasc(e.target.value);
              }}
              value={data_nasc}
            />

            <select
              name="sexo"
              onChange={e => {
                setSexo(e.target.value);
              }}
              value={sexo}
            >
              <option>Sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>

            <input
              type="text"
              name="nome_pai"
              placeholder="Nome do pai"
              onChange={e => {
                setNomePai(e.target.value);
              }}
              value={nome_pai}
            />

            <input
              type="text"
              name="nome_mae"
              placeholder="Nome da mãe"
              onChange={e => {
                setNomeMae(e.target.value);
              }}
              value={nome_mae}
            />
          </div>
          <div>
            <span>Endereço</span>

            <input
              type="text"
              name="endereco"
              placeholder="Rua"
              onChange={e => {
                setEndereco(e.target.value);
              }}
              value={endereco}
            />

            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              onChange={e => {
                setBairro(e.target.value);
              }}
              value={bairro}
            />

            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              onChange={e => {
                setCidade(e.target.value);
              }}
              value={cidade}
            />

            <select
              name="uf"
              onChange={e => {
                setUf(e.target.value);
              }}
              value={uf}
            >
              <option>Selecione o estado</option>
              <option value="MG">MG</option>
            </select>
          </div>
          <div>
            <span>Informações adicionais</span>
            <div className="content">
              <div className="label">
                <p>Categoria</p>

                <select
                  name="categoria"
                  onChange={e => {
                    setCategoria(e.target.value);
                  }}
                  value={categoria}
                >
                  <option>Selecione a categoria</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>

              <div className="label">
                <p>Instrutor</p>

                <select
                  name="instrutor_id"
                  placeholder="Instrutor"
                  onChange={e => {
                    setInstrutor(e.target.value);
                  }}
                  value={instrutor_id}
                >
                  <option>Selecione o instrutor</option>
                  {instrutores.map(instrutor => (
                    <option key={instrutor.id} value={instrutor.id}>
                      {instrutor.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="label">
                <p>Veículo</p>

                <select
                  name="veiculo_id"
                  onChange={e => {
                    setVeiculo(e.target.value);
                  }}
                  value={veiculo_id}
                >
                  <option>Selecione o veículo</option>
                  {veiculos.map(veiculo => (
                    <option key={veiculo.id} value={veiculo.id}>
                      {veiculo.placa}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p>Data de matrícula:</p>

            <input
              type="date"
              name="data_matric"
              placeholder="Data de matrícula"
              onChange={e => {
                setDataMatric(e.target.value);
              }}
              value={data_matric}
            />
          </div>
          <div>
            <span>Informações profissionais</span>

            <input
              type="text"
              name="profissao"
              placeholder="Profissão"
              onChange={e => {
                setProfissao(e.target.value);
              }}
              value={profissao}
            />

            <input
              type="text"
              name="local_trab"
              placeholder="Local de trabalho"
              onChange={e => {
                setLocalTrab(e.target.value);
              }}
              value={local_trab}
            />
          </div>
          <p id="status">Status:</p>

          <select
            name="ativo"
            onChange={e => {
              setAtivo(e.target.value);
            }}
            value={ativo}
          >
            <option>Selecione o status</option>
            <option value="1">Ativo</option>
            <option value="0">Inativo</option>
          </select>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Container>
  );
}
