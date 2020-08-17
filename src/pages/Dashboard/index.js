import React, { useState, useContext } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';

import history from '../../services/history';
import api from '../../services/api';

import { Container, Content, Search, Icone } from './styles';

import Header from '../../components/Header';
import Tabela from '../../components/Tabela';

export default function Dashboard() {
  const [cpf_mask, setCpfMask] = useState('');
  const [aluno_, setAluno_] = useState('');

  const theme = useContext(ThemeSwitcher);

  function handleSearch(cpf_number) {
    if (cpf_number.length <= 13) {
      toast.error('Preencha todos os caracteres do CPF');
    } else {
      const cpf = cpf_number.replace(/\D/g, ''); // Remove tudo o que não é dígito

      api
        .get(`/alunos/${cpf}`)
        .then(res => {
          setAluno_(res.data);
          setCpfMask('');
        })
        .catch(error => {
          toast.error('Aluno não encontrado, verique o CPF');
        });
    }
  }
  return (
    <Container theme={theme.theme}>
      <Header />
      <Content>
        <Search theme={theme.theme}>
          <span>Consultar aluno</span>
          <div>
            <InputMask
              type="text"
              name="cpf"
              value={cpf_mask}
              placeholder="Digite o CPF do aluno"
              onChange={e => setCpfMask(e.target.value)}
              mask="999.999.999-99"
            />
            <button
              type="button"
              onClick={() => {
                handleSearch(cpf_mask);
              }}
            >
              <Icone />
            </button>
          </div>
          <button
            type="button"
            className="exibir_todos"
            onClick={() => {
              window.location.reload();
            }}
          >
            Exibir todos
          </button>
          <button
            className="add_aluno"
            type="button"
            onClick={() => {
              history.push('aluno');
            }}
          >
            Novo aluno
          </button>
        </Search>
        <Tabela aluno_={aluno_} />
      </Content>
    </Container>
  );
}
